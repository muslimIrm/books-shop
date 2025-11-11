"use client"

import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import Link from "next/link";

import { FaMinus } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
const Cart = () => {
    const { productsCart, setProductsCart } = useCartContext()
    function truncateString(str, maxLength) {
        if (str.length > maxLength) {
            return str.slice(0, maxLength - 3) + '...';
        }
        return str;
    }
    return (
        <div className="w-full min-h-[70dvh] !py-30">
            <div className="container">
                <div className="w-full relative !py-4 flex flex-col !gap-5 min-h-100 bg-white rounded">
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
                                <Link key={i} href={"/"} className="flex items-center justify-between border border-transparent hover:border-primary rounded transition-all duration-300 !px-2 !py-1 ">
                                    <div className="flex items-center !gap-4">

                                        <div className="overflow-hidden max-w-16 max-md:max-w-12 roudned">
                                            <img src={p.image} className="w-full h-full" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl max-sm:!text-sm">{p.title}</h2>
                                            <p className=" text-neutral-500 max-md:text-[14px] max-sm:text-[10px]">{truncateString(p.description, 50)}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center !gap-5">
                                        <div className=" inline-flex justify-between !gap-2 items-center  border !p-1 border-neutral-500 rounded">
                                            <buttn className=" cursor-pointer text-primary !p-1 *:text-sm rounded text-center max-sm:*:text-[10px]"><FaPlus /></buttn>
                                            <span className="text-neutral-600 max-sm:text-[10px]">{p.items}</span>
                                            <button className=" cursor-pointer text-primary !p-1 *:text-sm rounded text-center max-sm:*:text-[10px]"><FaMinus /></button>
                                        </div>

                                        <div>
                                            <span className="text-primary font-bold">{p.price}$</span>
                                        </div>

                                    </div>
                                </Link>
                            )
                        }
                    </div>

                    <div className="w-full absolute bottom-5 flex items-center justify-center">
                        <div>
                            <button className="btn hover:!bg-[#0da599]">Buy Now</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Cart