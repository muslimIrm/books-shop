"use client"
export const runtime = 'edge';
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useCartContext } from "@/app/context/CartContext";
import { FaMinus } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { useParams } from "next/navigation";
import axios from "axios";
import Url from "@/app/Url";

const Page = () => {
    const { id } = useParams()
    const { productsCart, setProductsCart } = useCartContext()
    const [currentBook, setCurrentBook] = useState(1)
    const [book, setBook] = useState({})
    const [token, setToken] = useState(false)
    useEffect(() => {
        setToken(localStorage.getItem("token"))
    }, [])
    useEffect(() => {
        const fetch = async () => {
            try {

                const result = await axios.get(`${Url}/books/${id}`)
                const data = result.data
                console.log(data)
                setBook(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetch()
    }, [])
    const handleButton = async () => {
        
        console.log(token)
        if (!token) {
            console.log("done")
            const result = await axios.post(`${Url}/new-cart`, { productId: id, items: currentBook })
            const data = result.data.token
            console.log(result.data)
            localStorage.setItem("token", data)
            setProductsCart((p) => { return { products: result.data.products, totalProduct:  result.data.YourCart.products.length} })

        } else{
            const result = await axios.post(`${Url}/carts/my-cart/new`, {productId: id, items: currentBook}, {headers: {Authorization: `Bearer ${token}`}})
            const data = result.data
            console.log(data)
            setProductsCart((p) => { return { products: result.data.products, totalProduct:  result.data.products.length} })

        }
        setCurrentBook(0)
    }
    const handlesetCurrentBook = (state) => {
        if (state == "plus") {
            setCurrentBook((p) => p + 1)
        } else {
            if (currentBook > 0) {
                setCurrentBook((p) => p - 1)
            }
        }
    }
    return (
        <div className="w-full !pt-30 !pb-5 h-full flex flex-col items-center">
            <div className="container">
                <div className="w-full flex items-center !gap-5 max-md:flex-col">
                    <div className="flex min-w-70 w-3/12 max-md:w-7/12  overflow-hidden rounded-[2px] items-center">
                        <img className="w-full h-full" src={book.image} />
                    </div>
                    <div className="flex flex-col !gap-3">
                        <div className="flex flex-col !gap-2">
                            <h1 className="text-4xl max-md:text-3xl font-bold font-sans">{book.title}</h1>
                            <span className="text-[20px] text-primary font-bold font-mono">{book.price}$</span>
                            <div className="flex !gap-3">
                                <button onClick={()=> currentBook != 0&& handleButton()} className="btn hover:!bg-[#0da599]">Add to cart</button>
                                <div className="flex items-center justify-center ">

                                    <div className=" inline-flex justify-between !gap-2 items-center  border !p-1 border-neutral-500 rounded">
                                        <buttn onClick={() => handlesetCurrentBook("plus")} className=" cursor-pointer text-primary !p-1 *:text-sm rounded text-center"><FaPlus /></buttn>
                                        <span className="text-neutral-600">{currentBook}</span>
                                        <button onClick={() => handlesetCurrentBook("minus")} className=" cursor-pointer text-primary !p-1 *:text-sm rounded text-center"><FaMinus /></button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div >
                            <p className="text-neutral-600 capitalize"><span className="font-bold text-black">Author: </span>{book.author}</p>
                            <p className="text-neutral-600 capitalize"><span className="font-bold text-black">Description: </span>{book.description}</p>
                            <p className="text-neutral-600 capitalize"><span className="font-bold text-black">pages: </span>{book.pages}p.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page