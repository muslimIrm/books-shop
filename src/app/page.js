import BooksSection from "./components/App/Books/BooksSection";
import Footer from "./components/App/Footer/Footer";
import Header from "./components/App/Header/Header";
import Main from "./components/App/Home/Home";
export default function Home() {
  return (
    <div className="flex flex-col !gap-5 !pt-20">
      <Main/>
      <BooksSection/>
    </div>
  );
}
