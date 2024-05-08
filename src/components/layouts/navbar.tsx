export const Navbar = () => {
    return (
        <div className="navbar w-full h-16 bg-[#373737] shadow-2xl">
            <div className="w-ful h-full flex text-white gap-10 items-center ml-8">
                <button className="font-semibold text-[1.5rem]">
                    F T P
                </button>
                <a href="/clothes">
                    CLOTHES
                </a>
                <a href="/outfits">
                    RECOMMENDED OUTFITS
                </a>
            </div>
        </div>
    )
}