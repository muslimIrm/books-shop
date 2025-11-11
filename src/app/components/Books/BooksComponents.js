'use client'

const { default: Link } = require("next/link");
import { useSearchParams } from 'next/navigation'
import { useState } from 'react';
import { FaChevronLeft } from "react-icons/fa";
import BooksMap from './BooksMap';

const BooksComponent = () => {
    const searchParams = useSearchParams()

    const [books, setBooks] = useState([
        {
            title: "Rich Dad Poor Dad",
            price: "14.99",
            description: "lorem dolar eilte, solar no cool kuto thaition.",
            image: "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg",
            evaluation: "4"
        },
        {
            title: "Think and Grow Rich",
            price: "10.99",
            description: "Think and Grow Rich has been called the Granddaddy of All Motivational Literature. It was the first book to boldly ask, What makes a winner? The man who asked and listened for the answer, Napoleon Hill, is now counted in the top ranks of the world's winners himself.",
            image: "https://m.media-amazon.com/images/I/61IxJuRI39L._SY385_.jpg",
            evaluation: "7"
        },
        {
            title: "Rich Dad Poor Dad",
            price: "14.99",
            description: "lorem dolar eilte, solar no cool kuto thaition.",
            image: "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg",
            evaluation: "4"
        },
        {
            title: "Think and Grow Rich",
            price: "10.99",
            description: "Think and Grow Rich has been called the Granddaddy of All Motivational Literature. It was the first book to boldly ask, What makes a winner? The man who asked and listened for the answer, Napoleon Hill, is now counted in the top ranks of the world's winners himself.",
            image: "https://m.media-amazon.com/images/I/61IxJuRI39L._SY385_.jpg",
            evaluation: "7"
        },
        {
            title: "Rich Dad Poor Dad",
            price: "14.99",
            description: "lorem dolar eilte, solar no cool kuto thaition.",
            image: "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg",
            evaluation: "4"
        },
    ])
    const search = searchParams.get(("type"))
    console.log(search)
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
                            <BooksMap data={books} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default BooksComponent