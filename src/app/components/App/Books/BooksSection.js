"use client"

import BooksComponent from "./BooksComponent";
import { useEffect, useState } from "react";
import axios from "axios";
import Url from "@/app/Url";
const BooksSection = () => {
    return (
        <div className="!my-6">
            <div className="container">

                <div className="w-full flex flex-col !gap-10">

                    <BooksComponent sortType={"lastBooks"} title={"Last Books"} pageBooks={"lastBooks"} />
                    <BooksComponent sortType={"highPrice"} title={"High Price"} pageBooks={"highPrice"} />
                    <BooksComponent sortType={"lessPrice"} title={"Less Price"} pageBooks={"lessPrice"} />
                </div>

            </div>
        </div>
    );
}


export default BooksSection