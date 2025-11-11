import Item from "./FooterItem";

import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import IconsFooter from "./IconsFooter";
const Footer = () => {

    const social = [
        { icon: "https://i.pinimg.com/736x/3a/35/8d/3a358df023050199d97d4ee04ca27f00.jpg" },
        { icon: "https://i.pinimg.com/736x/de/84/ec/de84ece92c36f184e873fa090c9e7624.jpg" },
        { icon: "https://i.pinimg.com/736x/c4/d3/ed/c4d3ed9d48ee3d92225b3545813d8bb6.jpg" },
        { icon: "https://i.pinimg.com/736x/57/13/84/5713846d630704ce892f9c93944ba451.jpg" },
        { icon: "https://i.pinimg.com/736x/a3/4b/df/a34bdf72f3fc66306d89d89a15c1cb18.jpg" },
    ]
    const PaymentCard = [
        { icon: "https://i.pinimg.com/1200x/07/73/4c/07734cf160091516ce46a0e71b9f1cab.jpg" },
        { icon: "https://i.pinimg.com/736x/fd/b4/ef/fdb4efb9ec1f26dd2fac539282074f6f.jpg" },
        { icon: "https://i.pinimg.com/736x/37/ec/77/37ec777fa00a64ebb61e47ede3205567.jpg" },
    ]

    return (
        <div className="bg-footer w-full flex flex-col">
            <div className="container">
                <div className="w-full !py-6 h-full grid grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2  justify-center !space-y-7">
                    <Item titel={"Shoping"} items={[{ content: "Bloog" }, { content: "FAQs" }, { content: "Payment" }, { content: "shipment" }, { content: "Wher's my order?" }, { content: "Retrun Policy" }]} />
                    <Item titel={"Style Advisor"} items={[{ content: "Your Account" }, { content: "information" }, { content: "Addresses" }, { content: "Discount" }, { content: "Orders History" }, { content: "Order Tracking" }]} />

                    <Item titel={"Information"} items={[{ content: "Site Map" }, { content: "Search Terms" }, { content: "Advanced Search" }, { content: "About Us" }, { content: "Cotnact Us" }, { content: "Suppliers" }]} />


                    <Item titel={"Contact"} items={[{ content: "Iraq - Basra - 123 Street", icon: <FaMapMarkerAlt className="text-[14px]" /> }, { content: "+964 770 000 0000", icon: <FaPhoneAlt className="text-[14px]" /> }, { content: "muslim.hashem.dev@gmail.com", icon: <MdEmail className="text-[14px]" /> }]} />

                </div>
                <div className="w-full flex justify-between">
                    <div className="flex !gap-2">
                        <IconsFooter icons={social} />
                    </div>
                    <div className="flex !gap-2">
                        <IconsFooter icons={PaymentCard} />
                    </div>
                </div>
                <div className="w-full !mt-4 !mb-2">
                    <div className="w-full h-[1px] bg-neutral-500"></div>
                    <div className="w-ful flex justify-between !pt-2">
                        <span className="text-[12px] text-neutral-500">&copy; 2025 All Right Reserverd</span>
                        <span className="text-[12px] text-neutral-500">Muslim Hashem</span>


                    </div>
                </div>
            </div>
        </div>
    );
}


export default Footer;