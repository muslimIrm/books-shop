import BooksComponent from "../components/Books/BooksComponents";

const { default: Footer } = require("../components/App/Footer/Footer");
const { default: Header } = require("../components/App/Header/Header");


const Books = () => {

    return (
        <div className="flex flex-col !gap-6 !pb-4 !pt-23">
            <BooksComponent />
        </div>
    );
}

export default Books