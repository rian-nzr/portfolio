import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes"
import { useState, useEffect } from "react";
import { BsMoonFill } from "react-icons/bs";
import {
    BiSolidHome,
    BiSolidFolderOpen,
    BiBookReader
} from "react-icons/bi"
import { SiAboutdotme } from "react-icons/si"
import { ReactNode } from "react";

interface props {
    fitur: ReactNode;


}
const Menus = [
    { title: "Home", icon: BiSolidHome, scr: '/' },
    { title: "Projects", icon: BiSolidFolderOpen, scr: '/projects' },
    { title: "Blog", icon: BiBookReader, scr: '/blog' },
    { title: "About", icon: SiAboutdotme, scr: '/about' },
    // { title: "Schedule ", icon: BsMoonFill, },
];

export default function Sidebar({ fitur }: props) {
    const [isAnimating, setIsAnimating] = useState(false);
    const { theme, setTheme } = useTheme();


    const toggleDarkMode = () => {
        setIsAnimating(true);
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        setTimeout(() => {
            setIsAnimating(false);
        }, 1000);
    };
    return (
        <>
            <div className="flex fixed top-10  border-r-[0.01px] dark:border-gray-600">
                <div className={` ${fitur ? "w-56" : "w-[70px] "} bg-dark-purple h-screen p-3  pt-8 relative duration-500`}>
                    <div className="flex flex-col gap-3 items-start border-b-[0.01px] dark:border-gray-600 pb-4">
                        <Image
                            src="/images/rian.png"
                            alt="logo"
                            width={110}
                            height={110}
                            className={`cursor-pointer duration-1000 rounded-full origin-left   ${!fitur && " scale-100"}`}
                        // rotate-[360deg]
                        />
                        <div className="">
                            <Link href={'/'}>
                                <h1 className={` origin-left font-medium text-2xl duration-300 transition-all ${!fitur && "scale-0 absolute"}`}>
                                    Ryan
                                </h1>
                            </Link>
                            <p className={`origin-left   text-sm text-neutral-600 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-400 transition-all duration-300 ${!fitur && "scale-0 absolute"}`}>
                                riannazar05@gmail.com
                            </p>
                        </div>
                    </div>

                    <ul className="pt-2 ">
                        {Menus.map((Menu, index) => (
                            <li key={Menu.title}>
                                <Link href={Menu.scr}
                                    className={`flex  rounded-md px-3 py-2 my-2 cursor-pointer dark:hover:bg-light-white hover:bg-gray-200 hover:shadow-md dark:hover:shadow-gray-600 dark:text-gray-300 text-sm items-center gap-3  ${!fitur ? 'justify-' : " "}  ${index === 0 && "dark:bg-light-white bg-gray-200 border-b border-gray-600 dark:border-gray-200 shadow-md dark:shadow-gray-600"} `}>
                                    {!fitur ?

                                        <div className="group relative inline-block">
                                            <p className="">
                                                <Menu.icon className="text-lg" />
                                            </p>
                                            <div className="absolute left-full top-1/2 z-20 ml-5 -translate-y-1/2 whitespace-nowrap rounded bg-black py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100">
                                                <span className="absolute left-[-3px] top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 rounded-sm bg-black" />
                                                {Menu.title}
                                            </div>
                                        </div>
                                        :
                                        <p>
                                            <Menu.icon className="text-lg" />

                                        </p>
                                    }

                                    <h2 className={`${!fitur && "scale-0 "} origin-left duration-200 font-medium flex items-center  gap-3`}>
                                        {Menu.title}
                                    </h2>
                                </Link>


                            </li>
                        ))}
                    </ul>

                </div>

            </div>


        </>
    )
}