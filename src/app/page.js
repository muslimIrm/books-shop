import BooksSection from "./components/App/Books/BooksSection";
import Main from "./components/App/Home/Home";
export default function Home() {
  return (
    <div className="flex flex-col !gap-5 !pt-20">
      <Main />
      <BooksSection />
      

    </div>
  );
}
