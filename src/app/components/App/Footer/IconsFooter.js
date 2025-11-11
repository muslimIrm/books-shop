


const IconsFooter = ({ icons }) => {

    return (
        icons && icons.map((icon, i) =>
            <a key={i} href={icon.href ? icon.link : "#"} className="min-w-8 max-w-12 max-sm:min-w-7 max-sm:h-7 max-sm:max-w-9 h-8 flex rounded overflow-hidden"><img className="w-full h-full" src={icon.icon} /></a>

        )
    );
}

export default IconsFooter