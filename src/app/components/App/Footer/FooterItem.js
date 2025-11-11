import Link from "next/link"

const Item = ({ titel, items,isContact=false }) => {


    return (
        <div className="flex flex-col !gap-3">
            <h3 className="text-white font-semibold text-xl">{titel}</h3>
            <div className="flex flex-col !gap-2">
                {
                    items.map((item, index) => {
                        return (


                            <div key={index}>
                                <Link href={item.link ? item.link : "/"} className="text-neutral-400 hover:text-primary text-[14px] max-md:text-[12px] !inline-flex items-center !gap-2">{item.icon && item.icon}{item.content}</Link>

                            </div>
                        )
                    })
                }

            </div>
        </div>
    )

}


export default Item