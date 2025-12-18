import { FaStar } from "react-icons/fa";
import Link from "next/link";
const CardBook = ({ image,link , title, description, price, evaluation }) => {
    function truncateString(str, maxLength) {
        if (str.length > maxLength) {
            return str.slice(0, maxLength - 3) + '...';
        }
        return str;
    }
    return (
        <Link href={`/books/${link}`} className="bg-card hover:border-primary border border-transparent max-h-133  transition-all duration-300 cursor-pointer lg:w-[24.3%] xl:w-[19.4%] md:w-[32.4%] max-md:w-[32.4%] max-sm:w-[48.5%] flex flex-col items-center">
            
            <div className="w-full max-h-7/12 !p-1">
                <img className="w-full h-full" src={`https://${image}`} />
            </div>
            <div className="flex flex-col !gap-2 !px-3 !my-2">
                <h1 className="font-bold text-xl max-md:text-lg text-wrap">{truncateString(title, 20)}</h1>
                <p className="text-neutral-600 text-sm max-md:text-[12px] text-wrap">{truncateString(description, 60)}</p>
                <div className="flex !gap-2 md:!gap-1 md:flex-col">

                    <span className="text-[20px] text-primary font-bold font-mono">{price}$</span>

                </div>
                <div>
                    <button className="!px-3 !py-2 text-[12px] font-bold font-sans border border-neutral-400 rounded cursor-pointer active:bg-neutral-100 hover:bg-neutral-200">ADD TO CART</button>
                </div>
            </div>
        </Link>
    );
}


export default CardBook