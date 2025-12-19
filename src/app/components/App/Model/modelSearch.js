"use client"
import Url from "@/app/Url";
import axios from "axios";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import CardBook from "../Books/Card";
import Link from "next/link";
import Spinner from "../../Spinner/Spinner";
const ModelSearch = ({ open, closeModel }) => {
    const [searchInputValue, setSearchInputValue] = useState("")
    const [page, setPage] = useState(1)
    const [data, setData] = useState([])
    const [spinnerState, setSpinnerState] = useState(false)
    function debounce(callback, delay) {
        let timer
        return function () {
            clearTimeout(timer)
            timer = setTimeout(() => {
                callback();
            }, delay)
        }
    }
    function handleSearch ()  {
        const fetch = async () => {
            setSpinnerState(true)
            setData([])
            try {

                const result = await axios.get(`${Url}/books/search?title=${searchInputValue}&page=${page}`)
                setData(result.data)

            } catch (error) {
                console.log(error)
            } finally {
                setSpinnerState(false)
            }
        }
        fetch()
    }
    const handleChange = (t) => {
        setSearchInputValue(t.target.value)

    }

    const Search = debounce(handleSearch, 800) 
    function truncateString(str, maxLength) {
        if (str.length > maxLength) {
            return str.slice(0, maxLength - 3) + '...';
        }
        return str;
    }
    return (
        open &&
        <div className="bg-neutral-600/50 fixed z-[9999] left-0 top-0 bottom-0 w-full h-dvh backdrop-blur-2xl flex items-center justify-center">
            <div className="w-4/12 max-lg:w-[60%] max-md:w-[70%] max-sm:w-[90%]">
                <div className="w-full flex flex-col !gap-4 ">

                    <div className="bg-white rounded-md !px-2 flex items-center justify-center h-12">
                        <input onInput={Search} value={searchInputValue} onChange={handleChange} className="w-full h-full outline-none border-none" placeholder="Search" />
                        <IoSearchOutline className="text-2xl hover:text-primary transition-all duration-300" />
                    </div>

                    <div className="flex w-full justify-self-center !gap-x-2 !gap-y-4 flex-wrap">
                        {
                            data.length > 0 && data.map((p, i) =>


                                <div key={i} className="flex bg-white w-full items-center justify-between border border-transparent hover:border-primary rounded transition-all duration-300 !px-2 !py-1 ">
                                    <Link onClick={closeModel} href={`/books/${p._id}`} className="flex items-center !gap-4">

                                        <div className="overflow-hidden max-w-16 max-md:max-w-12 roudned">
                                            <img src={`https://${p.image}} className="w-full h-full" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl max-sm:!text-sm">{p.title}</h2>
                                            <p className=" text-neutral-500 max-md:text-[14px] max-sm:text-[10px]">{truncateString(p.description, 50)}</p>
                                        </div>
                                    </Link>

                                    <div className="flex items-center !gap-5">


                                        <div>
                                            <span className="text-primary font-bold">{p.price}$</span>
                                        </div>

                                    </div>
                                </div>
                            )
                        }
                        {spinnerState && <Spinner />}
                    </div>
                </div>

            </div>

            <div className=" absolute left-10 top-10 flex items-center justify-center">
                <button onClick={closeModel} className="bg-white text-primary cursor-pointer text-2xl rounded-full w-10 h-10 flex items-center justify-center"><IoClose /></button>
            </div>

        </div>
    );
}


export default ModelSearch;
