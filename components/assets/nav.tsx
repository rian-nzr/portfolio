import {
    BiSolidHome,
    BiSolidFolderOpen,
    BiBookReader
} from "react-icons/bi"
import { SiAboutdotme } from "react-icons/si"
import Link from "next/link";
import { ReactNode } from "react";
import { useRouter } from "next/router";


interface props {
    menus: ReactNode;
}

const Menus = [
    { title: "Home", icon: BiSolidHome, scr: '/' },
    { title: "portfolio", icon: BiSolidFolderOpen, scr: '/portfolio' },
    { title: "Blog", icon: BiBookReader, scr: '/blog' },
    { title: "About", icon: SiAboutdotme, scr: '/about' },
];

export default function Navs({ menus }: props) {
    const router = useRouter();

    return (
        <ul className="pt-2 ">
            {Menus.map((Menu, index) => (
                <li key={Menu.title}>
                    <Link href={Menu.scr}
                        className={`flex  rounded-md px-3 py-2 my-2 cursor-pointer dark:hover:bg-light-white hover:bg-gray-200 hover:shadow-md dark:hover:shadow-gray-600 transition-all duration-200 dark:text-gray-300 text-sm items-center gap-3  ${router.pathname === Menu.scr && "dark:bg-light-white bg-gray-200 border-b border-gray-600 dark:border-gray-200 shadow-md dark:shadow-gray-600" } `}>
                        {!menus ?
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

                        <h2 className={`${!menus && "scale-0 "} origin-left duration-200 font-medium flex items-center  gap-3`}>
                            {Menu.title}
                        </h2>
                    </Link>


                </li>
            ))}
        </ul>
    )
}