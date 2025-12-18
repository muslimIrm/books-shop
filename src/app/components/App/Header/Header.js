"use client";
import { IoSearchOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { useCartContext } from "@/app/context/CartContext";
import { useState } from "react";
import ModelSearch from "../Model/modelSearch";
import Link from "next/link";
const Header = () => {
    const { productsCart, setProductsCart } = useCartContext()

    const [openModel, setOpenModel] = useState(false)

    const handleOpenModel = () => {
        setOpenModel((p) => !p)
    }
    return (
        <>
            <div className="w-full bg-primary fixed z-[999]">
                <div className="container !py-5">
                    <div className="w-full flex items-center justify-between">
                        <div className="min-w-45">
                            <Link href={"/"} className="text-white text-center text-3xl max-md:text-2xl max-sm:text-xl font-sans font-bold">Muslim Shop</Link>
                        </div>
                        <div className="flex !gap-4 items-center justify-center">
                            <div onClick={handleOpenModel} className="bg-white rounded-md !px-2 flex items-center justify-center h-9 w-70 max-md:w-50 max-sm:w-30 max-[20rem]:w-15">
                                <div className="w-full flex items-center justify-center">
                                    <h3 className="flex w-full h-full outline-none border-none">Search</h3>

                                </div>
                                <IoSearchOutline className="text-2xl" />
                            </div>
                            <Link href={"/cart"} className="flex !gap-2 items-center justify-center cursor-pointer">
                                <FaShoppingCart className="text-2xl text-white" />
                                <span className="text-white text-lg font-mono max-sm:hidden">MY CART</span>
                                <span className="!px-2 !py-1 rounded-sm bg-[#069183] text-white text-xl">{productsCart.totalProduct}</span>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            <ModelSearch open={openModel} closeModel={handleOpenModel} />
        </>
    );
}


export default Header