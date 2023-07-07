import { RiMenuUnfoldLine, RiMenuFoldLine } from "react-icons/ri"
import { IoIosCall } from "react-icons/io"
import { SetStateAction, useState } from "react"
import { Dispatch } from "react";
import { useTheme } from "next-themes"
import { BiSun, } from "react-icons/bi";
import { PiMoonStarsDuotone } from "react-icons/pi"



interface props {
    fitur: boolean;
    setfitur: Dispatch<SetStateAction<boolean>>;

}

export default function Header({ fitur, setfitur }: props) {
    const [isAnimating, setIsAnimating] = useState(false);
    const { theme, setTheme } = useTheme();

    const toggleDarkMode = () => {
        setIsAnimating(true);
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        setTimeout(() => {
            setIsAnimating(false);
        }, 500);
    };
    


    return (
        <div className="sticky dark:bg-gray-900 bg-white top-0 z-10 border-b dark:border-gray-600 border-gray-300 px-4 ">
            <div className="flex py-2 items-center justify-between">
                <div className="flex items-center gap-5">
                    <button onClick={() => setfitur(!fitur)} className={`${fitur && "rotate-[360deg]"}`}>
                        {!fitur ?
                            <RiMenuUnfoldLine className="text-2xl" />
                            : <RiMenuFoldLine className="text-2xl" />}
                    </button>
                    <h1 className={`flex-grow origin-left  text-lg lg:text-xl duration-500 font-medium ${fitur && " scale-0"}`}>Ryan</h1>
                </div>
                <div className="flex justify-between items-center gap-3">
                    <IoIosCall className="text-2xl" />
                    <button onClick={toggleDarkMode} className={`duration-1000 cursor-pointer font-bold text-2xl p-2 ${isAnimating && "rotate-[350deg] scale-50"} ${theme === "dark" ? ' text-blue-600' : ' text-amber-700'}`}>
                        {theme === "dark" ?
                            <PiMoonStarsDuotone />
                            :
                            <BiSun />
                        }
                    </button>
                </div>
            </div>

        </div>
    )
}