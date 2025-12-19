"use client"

import { Suspense } from "react";
import BooksComponent from "../components/Books/BooksComponents";
import { useSearchParams } from "next/navigation";

function BooksContent() {
    const searchParams = useSearchParams();
    const type = searchParams.get("type");

    return (
        <BooksComponent type={type} />
    );
}

export default function Books() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BooksContent />
        </Suspense>
    );
}