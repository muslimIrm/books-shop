"use client"
import BooksComponent from "../components/Books/BooksComponents";
import { useSearchParams } from "next/navigation";
export default function Books() {
    const searchParams = useSearchParams().get(("type"))
    const type =
        typeof searchParams?.type === "string"
            ? searchParams.type
            : "lastBooks";

    return (
        <div className="flex flex-col !gap-6 !pb-4 !pt-23">
            <BooksComponent type={type} />
        </div>
    );
}
