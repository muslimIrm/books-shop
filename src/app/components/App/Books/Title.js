


const Title = ({title, info, children})=>{

    return(
        <div className="flex relative items-center !gap-10 max-md:!gap-5 overflow-hidden">
            <h1 className="text-2xl max-md:text-xl font-sans text-black min-w-26">{title}</h1>
            <div className=" block !h-6 !w-[1px] bg-neutral-400"></div>
            <p className="text-neutral-600 text-[16px] max-md:text-[12px]">{info}</p>
            {children}
        </div>
    )
}

export default Title