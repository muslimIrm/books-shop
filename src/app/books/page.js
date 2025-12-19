import BooksComponent from "../components/Books/BooksComponents";

export default function Books({ searchParams }) {
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
