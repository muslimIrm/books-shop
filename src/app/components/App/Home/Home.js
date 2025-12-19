"use client"
import { MdNavigateNext } from "react-icons/md";
const Main = () => {



    return (
        <div className="w-full !flex items-center justify-center !py-5">
            <div className="container  min-h-128 image rounded-sm ">
                <div className="w-full flex flex-col !gap-6 !my-5 !px-16 max-md:!px-12 max-sm:!px-10 !py-18">
                    <div className="max-w-34 max-md:max-w-36 text-center">
                        <span className="text-white !py-1 text-sm tracking-widest border-t-2 border-b-2 border-neutral-400">CLEARANCE SALE</span>
                    </div>

                    <h1 className="text-6xl max-md:text-5xl  font-sans font-light text-white ">COLLECTION</h1>
                    <p className="font-mono font-extralight text-white text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div>
                        <button className="btn">Buy now <MdNavigateNext className="icon transition-all duration-300 !text-3xl !font-bold"/></button>
                    </div>
                </div>

            </div>
        </div>
    );


}


export default Main;