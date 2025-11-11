"use client"
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
const ModelSearch = ({ open, closeModel }) => {
    const [searchInputValue, setSearchInputValue] = useState("")

    return (
        open &&
        <div className="bg-neutral-600/50 fixed z-[9999] left-0 top-0 bottom-0 w-full h-dvh backdrop-blur-2xl flex items-center justify-center">
            <div className="w-4/12 max-lg:w-[60%] max-md:w-[70%] max-sm:w-[90%]">
                <div className="w-full flex flex-col !gap-4">

                    <div className="bg-white rounded-md !px-2 flex items-center justify-center h-12">
                        <input value={searchInputValue} onChange={(t)=> setSearchInputValue(t.target.value)} className="w-full h-full outline-none border-none" placeholder="Search" />
                        <IoSearchOutline className="text-2xl hover:text-primary transition-all duration-300" />
                    </div>
                </div>

            </div>

            <div className=" absolute left-10 top-10 flex items-center justify-center">
                <button onClick={closeModel} className="bg-white text-primary cursor-pointer text-2xl rounded-full w-10 h-10 flex items-center justify-center"><IoClose/></button>
            </div>

        </div>
    );
}


export default ModelSearch;