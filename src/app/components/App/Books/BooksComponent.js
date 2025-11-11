"use client"
import { useState } from "react"
import CardBook from "./Card"
import Title from "./Title"
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
const BooksComponent = ({booksData, title, pageBooks}) => {
    const [books, setBooks] = useState(booksData)
    return (
        <div className="flex flex-col !gap-6">
            <Title title={title} info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} >
                <Link href={`/books?type=${pageBooks}`} className="text-primary flex items-center justify-center !gap-3 cursor-pointer text-lg font-[600] absolute right-3 transform max-lg:hidden hover:*:translate-x-0.5">Show More<FaArrowRightLong className="transition-all duration-300" /></Link>
            </Title>
            <div className="flex !gap-x-6 overflow-x-auto">
                {
                    books.length > 0 && books.map((book, i) => {

                        return (<CardBook key={i} image={book.image} title={book.title} evaluation={book.evaluation} price={book.price} description={book.description} />)

                    })
                }
                <Link href={`/books?type=${pageBooks}`} className="text-primary min-w-30 flex items-center justify-center !gap-3 cursor-pointer text-lg font-[600] lg:hidden transform  hover:*:translate-x-0.5">Show More</Link>

            </div>
        </div>
    )
}

export default BooksComponent