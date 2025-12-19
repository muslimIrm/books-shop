import { Suspense } from "react";
import BooksComponent from "../components/Books/BooksComponents";

export default function Books() {
  return (
    <div className="flex flex-col !gap-6 !pb-4 !pt-23">
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <BooksComponent />
      </Suspense>
    </div>
  );
}
