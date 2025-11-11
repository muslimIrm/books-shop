"use client"
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useCartContext } from "@/app/context/CartContext";
import { FaMinus } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
const Page = () => {
    const { productsCart, setProductsCart } = useCartContext()
    const [currentBook, setCurrentBook] = useState(0)
    const [book] = useState({
        title: "Rich Dad Poor Dad",
        price: "14.99",
        description: "lorem dolar eilte, solar no cool kuto thaition.",
        image: "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg",
        evaluation: "4",
        author: "Jaims Cler",
        pages: "413"
    })
    const handleButton = () => {
        setProductsCart((p) => { return { ...p, totalProduct: p.totalProduct + currentBook } })
        setCurrentBook(0)
    }
    const handlesetCurrentBook = (state)=>{
        if(state == "plus"){
            setCurrentBook((p)=> p + 1)
        }else{
            if(currentBook > 0) {
                setCurrentBook((p)=> p - 1)
            }
        }
    }
    return (
        <div className="w-full !pt-30 !pb-5 h-full flex flex-col items-center justify-center">
            <div className="container">
                <div className="w-full flex items-center justify-center !gap-5 max-md:flex-col">
                    <div className="flex w-3/12 max-md:w-8/12  overflow-hidden rounded-[2px] items-center justify-center">
                        <img className="w-full h-full" src={book.image} />
                    </div>
                    <div className="flex flex-col !gap-3">
                        <div className="flex flex-col !gap-2">
                            <h1 className="text-4xl max-md:text-3xl font-bold font-sans">{book.title}</h1>
                            <span className="text-[20px] text-primary font-bold font-mono">{book.price}$</span>
                            <span className="flex !gap-1 items-center text-lg font-bold"><FaStar className="text-yellow-500" />{book.evaluation}/5</span>
                            <div className="flex !gap-3">
                                <button onClick={handleButton} className="btn hover:!bg-[#0da599]">Add to cart</button>
                                <div className="flex items-center justify-center ">

                                    <div className=" inline-flex justify-between !gap-2 items-center  border !p-1 border-neutral-500 rounded">
                                        <buttn onClick={()=> handlesetCurrentBook("plus")} className=" cursor-pointer text-primary !p-1 *:text-sm rounded text-center"><FaPlus /></buttn>
                                        <span className="text-neutral-600">{currentBook}</span>
                                        <button onClick={()=> handlesetCurrentBook("minus")} className=" cursor-pointer text-primary !p-1 *:text-sm rounded text-center"><FaMinus /></button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div>
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