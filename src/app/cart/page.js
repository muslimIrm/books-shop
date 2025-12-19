"use client"
export const runtime = 'edge';
import { useState, useEffect } from "react";
import { useCartContext } from "../context/CartContext";
import Link from "next/link";

import { FaMinus } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import axios from "axios";
import Url from "../Url";
import Spinner from "../components/Spinner/Spinner";
const Cart = () => {
    const { productsCart, setProductsCart } = useCartContext()
    const [token, setToken] = useState(false)

    const [spinnerState, setSpinnerState] = useState(false)
    const [Error, setError] = useState({ state: false, message: "" })
    useEffect(() => {
        setToken(localStorage.getItem("token"))
    }, [])

    function truncateString(str, maxLength) {
        if (str.length > maxLength) {
            return str.slice(0, maxLength - 3) + '...';
        }
        return str;
    }

    const handleUpdateItem = async (item, id, type) => {

        setSpinnerState(true)
        if (type === "plus") {
            const newItme = item + 1
            try {
                const result = await axios.put(`${Url}/carts/my-cart/${id}`, { items: newItme }, { headers: { Authorization: `Bearer ${token}` } })
                setProductsCart((p) => { return { products: result.data.products, totalProduct: result.data.products.length } })


            } catch (error) {
                console.log(error.message)
                setError({ state: true, message: error.message ? error.message : "There is Error, try agin later!" })


            } finally {
                setSpinnerState(false)
            }
        } else if (type === "minus") {
            const newItme = item - 1
            try {

                const result = await axios.put(`${Url}/carts/my-cart/${id}`, { items: newItme }, { headers: { Authorization: `Bearer ${token}` } })
                setProductsCart((p) => { return { products: result.data.products, totalProduct: result.data.products.length } })

            } catch (error) {
                console.log(error.message)
                setError({ state: true, message: error.message ? error.message : "There is Error, try agin later!" })


            } finally {
                setSpinnerState(false)
            }
        } else if (type === "delete") {
            try {

                const result = await axios.delete(`${Url}/carts/my-cart/${id}`, { headers: { Authorization: `Bearer ${token}` } })

                setProductsCart((p) => { return { products: result.data.data.products, totalProduct: result.data.data.products.length } })

            } catch (error) {
                console.log(error.message)
                setError({ state: true, message: error.message ? error.message : "There is Error, try agin later!" })


            } finally {
                setSpinnerState(false)
            }
        }
    }
    return (
        <div className="w-full min-h-[70dvh] !py-30">
            <div className="container">
                <div className="w-full  !py-4 flex flex-col !gap-5 min-h-100 bg-white rounded">
                    <div className="w-full flex items-center justify-center">
                        <h1 className="text-4xl text-primary font-bold">
                            My Cart
                        </h1>
                    </div>

                    <div className="flex flex-col !gap-4 !px-10 max-md:!px-5 max-sm:!px-2">
                        <div className="flex items-center justify-between border-b border-neutral-400">
                            <div>
                                <span className="text-neutral-400">Products</span>
                            </div>
                            <div className="flex items-center !gap-12 !px-3">
                                <span className="text-neutral-400">Items</span>
                                <span className="text-neutral-400">Price</span>
                            </div>
                        </div>
                        {
                            productsCart.products.map((p, i) =>
                                <div key={i} className="flex items-center justify-between border border-transparent hover:border-primary rounded transition-all duration-300 !px-2 !py-1 ">
                                    <Link href={`/books/${p.product._id}`} className="flex items-center !gap-4">

                                        <div className="overflow-hidden max-w-16 max-md:max-w-12 roudned">
                                            <img src={p.image} className="w-full h-full" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl max-sm:!text-sm">{p.product.title}</h2>
                                            <p className=" text-neutral-500 max-md:text-[14px] max-sm:text-[10px]">{truncateString(p.product.description, 50)}</p>
                                        </div>
                                    </Link>

                                    <div className="flex items-center !gap-5">
                                        <div className=" inline-flex justify-between !gap-2 items-center  border !p-1 border-neutral-500 rounded">
                                            <button className=" cursor-pointer text-primary !p-1 *:text-sm rounded text-center max-sm:*:text-[10px]" onClick={() => handleUpdateItem(p.items, p._id, "plus")}><FaPlus /></button>
                                            <span className="text-neutral-600 max-sm:text-[10px]">{p.items}</span>
                                            <button className=" cursor-pointer text-primary !p-1 *:text-sm rounded text-center max-sm:*:text-[10px]" onClick={() => handleUpdateItem(p.items, p._id, p.items > 1 ? "minus" : "delete")}><FaMinus /></button>
                                        </div>

                                        <div>
                                            <span className="text-primary font-bold">{p.product.price}$</span>
                                        </div>

                                    </div>
                                </div>
                            )
                        }
                    </div>

                    <div className="w-full flex items-center justify-center">
                        <div>
                            <Link href={"/cart/buy"} className="btn hover:!bg-[#0da599]">Buy Now</Link>

                        </div>
                    </div>

                    {
                        spinnerState &&
                        <div className=" fixed bg-neutral-400/60 top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className="!p-6 h-20 flex items-center justify-center rounded-2xl bg-white">
                                <Spinner />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}


export default Cart