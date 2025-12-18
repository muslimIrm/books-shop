"use client"
const { useState } = require("react");
import CardBook from "../App/Books/Card";

const BooksMap = ({ data }) => {
    const [booksData] = useState(data)
    return (
        <div className="flex justify-self-center !gap-x-2 !gap-y-4 flex-wrap">
            {
                booksData.length > 0 && booksData.map((book, i) => {

                    return (<CardBook key={i} link={book._id} image={book.image} title={book.title} evaluation={book.evaluation} price={book.price} description={book.description} />)

                })
            }
        </div>
    );
}

export default BooksMap