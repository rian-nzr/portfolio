import Image from "next/image";
import Link from "next/link";
import {BiSolidHome, BiSolidFolderOpen, BiBookReader} from "react-icons/bi"
import { SiAboutdotme, SiGithub } from "react-icons/si"
import { ReactNode } from "react";
import Navs from "@/components/assets/nav";

interface props {
    fitur: ReactNode;
}

const Menus = [
    { title: "Home", icon: BiSolidHome, scr: '/' },
    { title: "portfolio", icon: BiSolidFolderOpen, scr: '/portfolio' },
    { title: "Blog", icon: BiBookReader, scr: '/blog' },
    { title: "About", icon: SiAboutdotme, scr: '/about' },
];

export default function Sidebar({ fitur }: props) {
    return (
        <>
            <div className="flex fixed border-r-[0.01px] dark:border-gray-600">
                <div className={` ${fitur ? "w-56" : "w-[70px] "} bg-dark-purple -full min-h-screen p-3  pt-8 relative duration-500`}>
                    <div className="flex flex-col gap-3 items-start border-b-[0.01px] dark:border-gray-600 pb-4">
                        <Image
                            src="/images/photo.png"
                            alt="logo"
                            width={110}
                            height={110}
                            className={`cursor-pointer duration-1000 rounded-full origin-left   ${!fitur && " scale-100"}`}
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
                    <div className="flex gap-3 flex-col">

                        <Navs menus={fitur} />

                        <ul className="pt-2 border-t dark:border-gray-600">

                            <li>
                                <Link href='https://github.com/rian-nzr/portfolio' target="_blank"
                                    className={`flex  rounded-md px-3 py-2 my-2 cursor-pointer dark:hover:bg-light-white hover:bg-gray-200  hover:shadow-md dark:hover:shadow-gray-600 transition-all duration-200 dark:text-gray-300 text-sm items-center gap-3  `}>
                                    {!fitur ?
                                        <div className="group relative inline-block hover:text-lg">
                                            <p className="">
                                                <SiGithub className="text-lg" />
                                            </p>
                                            <div className="absolute left-full top-1/2 z-20 ml-5 -translate-y-1/2 whitespace-nowrap rounded bg-black py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100">
                                                <span className="absolute left-[-3px] top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 rounded-sm bg-black" />
                                                Source Code
                                            </div>
                                        </div>
                                        :
                                        <p>
                                            <SiGithub className="text-lg" />

                                        </p>
                                    }

                                    <h2 className={`${!fitur && "scale-0 "} origin-left duration-200 font-medium flex items-center  gap-3`}>
                                        Source Code
                                    </h2>
                                </Link>


                            </li>

                        </ul>
                    </div>
                </div>
            </div>


        </>
    )
}