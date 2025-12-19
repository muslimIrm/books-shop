'use client'

const { default: Link } = require("next/link");
import { useSearchParams } from 'next/navigation'
import { useState, useEffect, Suspense } from 'react';
import { FaChevronLeft } from "react-icons/fa";
import BooksMap from './BooksMap';
import axios from 'axios';
import Url from '@/app/Url';
import CardBook from '../App/Books/Card';
import Spinner from '../Spinner/Spinner';
const BooksComponentContent = () => {
    const searchParams = useSearchParams()

    const [spinnerState, setSpinnerState] = useState(true)
    const [Error, setError] = useState({ state: false, message: "" })
    const [books, setBooks] = useState([])
    const search = searchParams.get(("type")) || "lastBooks"
    const [params, setParams] = useState({ limit: 20, page: 1, totalPages: 1 })
    useEffect(() => {
        const fetch = async () => {
            setSpinnerState(true)
            setError((p) => { return { ...p, state: false } })
            try {

                const result = await axios.get(`${Url}/books?limit=${params.limit}&page=${params.page}&sort=${search}`)
                const data = result.data.Books
                console.log(result.data)
                const booksAfterAddData = [...books, ...data]
                setBooks(booksAfterAddData)
                setParams((prev) => { return { ...prev, totalPages: result.data.totalPages } })

            } catch (error) {
                console.log(error)
                setError({ state: true, message: error.message ? error.message : "There is Error, try agin later!" })



            } finally {
                setSpinnerState(false)
            }
        }
        fetch()
    }, [params.page])
    const handleTry = ()=>{
        const fetch = async () => {
            setSpinnerState(true)
            setError((p) => { return { ...p, state: false } })
            try {

                const result = await axios.get(`${Url}/books?limit=${params.limit}&page=${params.page}&sort=${search}`)
                const data = result.data.Books
                console.log(result.data)
                const booksAfterAddData = [...books, ...data]
                setBooks(booksAfterAddData)
                setParams((prev) => { return { ...prev, totalPages: result.data.totalPages } })

            } catch (error) {
                console.log(error)
                setError({ state: true, message: error.message ? error.message : "There is Error, try agin later!" })



            } finally {
                setSpinnerState(false)
            }
        }
        fetch()

    }
    useEffect(() => { console.log(spinnerState) }, [spinnerState])

    return (
        <div className="w-full">
            <div className="container">
                <div className="w-full flex flex-col !gap-5">
                    <div className="w-full flex items-start">
                        <Link href={"/"} className="flex text-xl items-center !gap-2 text-primary transform  hover:*:-translate-x-0.5"><FaChevronLeft className="transition-all duration-300" /> Back Home</Link>
                    </div>
                    <div className="w-full flex flex-col !gap-4">
                        <div className="w-full flex items-center justify-center">
                            <h1 className='text-3xl max-md:text-2xl font-bold capitalize'>{search}</h1>
                        </div>
                        <div className='w-full'>


                            <div className="flex w-full justify-self-center !gap-x-2 !gap-y-4 flex-wrap">
                                {
                                    books.length > 0 && books.map((book, i) => {

                                        return (<CardBook key={i} link={book._id} image={book.image} title={book.title} evaluation={book.evaluation} price={book.price} description={book.description} />)

                                    })
                                }
                            </div>
                            {
                                spinnerState && <Spinner />
                            }
                            {
                                Error.state&& <p className='w-full text-center text-red-400'>{Error.message}</p>
                            }

                            <div className='w-full flex justify-center items-center !py-5'>
                                {params.totalPages != params.page ? <button onClick={() => setParams((prev) => { return { ...prev, page: prev.page + 1 } })} className='btn !text-2xl !px-15 !py-3'>More</button> : <div></div>}
                                {Error.state&&  <button onClick={handleTry} className='btn !bg-red-500 !text-xl !px-6 !py-2 '>Try agin</button> }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

const BooksComponent = ()=>{
    return(
        <Suspense>
            <BooksComponentContent/>
        </Suspense>
    )
}
export default BooksComponent