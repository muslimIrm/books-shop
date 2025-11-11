"use client"

import BooksComponent from "./BooksComponent";
import { useState } from "react";

const BooksSection = ()=>{
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
    return(
        <div className="!my-6">
           <div className="container">
                <div className="w-full flex flex-col !gap-10">
                    <BooksComponent booksData={books} title={"Last Books"} pageBooks={"lastBooks"}/>
                    <BooksComponent booksData={books} title={"High Quilty"} pageBooks={"highQuilty"}/>
                    <BooksComponent booksData={books} title={"Less Price"} pageBooks={"lessPrice"}/>
                </div>
            </div> 
        </div>
    );
}


export default BooksSection