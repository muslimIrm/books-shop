"use client"
import { useState, useEffect, use } from "react"
import CardBook from "./Card"
import Title from "./Title"
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import Url from "@/app/Url";
import axios from "axios";
import Spinner from "../../Spinner/Spinner";
const BooksComponent = ({ sortType, title, pageBooks }) => {
    const [books, setBooks] = useState([])
    const [spinnerState, setSpinnerState] = useState(true)
    const [Error, setError] = useState({ state: false, message: "" })
    useEffect(() => {
        const fetch = async () => {
            setSpinnerState(true)
            try {
                const result = await axios.get(`${Url}/books?sort=${sortType}`)
                const data = result.data.Books
                console.log(data)
                setBooks(data)
                setError(false)

            } catch (error) {
                console.log(error.message)
                setError({ state: true, message: error.message ? error.message : "There is Error, try agin later!" })
            } finally {
                setSpinnerState(false)
            }
        }
        fetch()
    }, [])

    const handleTry = () => {
        const fetch = async () => {
            setSpinnerState(true)
            setError((p)=> {return{...p, state: false}})
            try {

                const result = await axios.get(`${Url}/books?sort=${sortType}`)
                const data = result.data.Books
                console.log(data)
                setBooks(data)
                setError(false)
            } catch (error) {
                console.log(error.message)
                setError({ state: true, message: error.message ? error.message : "There is Error, try agin later!" })
            } finally {
                setSpinnerState(false)
            }
        }
        fetch()

    }
    return (
        <div className="flex flex-col !gap-6">
            <Title title={title} info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} >
                <Link href={`/books?type=${pageBooks}`} className="text-primary flex items-center justify-center !gap-3 cursor-pointer text-lg font-[600] absolute right-3 transform max-lg:hidden hover:*:translate-x-0.5">Show More<FaArrowRightLong className="transition-all duration-300" /></Link>
            </Title>
            <div className="flex !gap-x-6 overflow-x-auto">
                {
                    books.length > 0 && books.map((book, i) => {

                        return (<CardBook link={book._id} key={i} image={book.image} title={book.title} evaluation={book.evaluation} price={book.price} description={book.description} />)

                    })
                }
                {
                    spinnerState && <Spinner />
                }
                {
                    Error.state && (<div className="w-full flex items-center justify-center !gap-2 flex-col">
                        <p className="w-full text-lg text-center text-neutral-600">{Error.message}</p>
                        <button onClick={handleTry} className='btn !bg-red-500 !text-lg !px-4 !py-2 '>Try agin</button>
                    </div>)
                }
                <Link href={`/books?type=${sortType}`} className="text-primary min-w-30 flex items-center justify-center !gap-3 cursor-pointer text-lg font-[600] lg:hidden transform  hover:*:translate-x-0.5">Show More</Link>

            </div>
        </div>
    )
}

export default BooksComponent