"use client"
import BooksComponent from "../components/Books/BooksComponents";

const { default: Footer } = require("../components/App/Footer/Footer");
const { default: Header } = require("../components/App/Header/Header");
export const dynamic = 'force-dynamic';
import { Suspense } from "react";
const Books = () => {

    return (
        <div className="flex flex-col !gap-6 !pb-4 !pt-23">
            <Suspense fallback="<div>Loadin</div>">

                <BooksComponent />
            </Suspense>
        </div>
    );
}

export default Books