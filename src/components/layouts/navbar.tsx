import Link from "next/link"

export const Navbar = () => {
    return (
        <div className="navbar w-full h-16 bg-[#373737]">
            <div className="w-ful h-full flex text-white gap-10 items-center ml-8">
                <Link href={"/"}>
                    <button className="font-semibold text-[1.5rem]">
                        F T P
                    </button>
                </Link>
                <Link href="/clothes">
                    CLOTHES
                </Link>
            </div>
        </div>
    )
}