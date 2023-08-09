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
                <div className={` ${fitur ? "w-56" : "w-[70px] "} bg-dark-purple h-screen p-3  pt-8 relative duration-500`}>
                    <div className="flex flex-col gap-3 items-start border-b-[0.01px] dark:border-gray-600 pb-4">
                        <Image
                            src="/images/photo.png"
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
                    <Navs menus={fitur} />
                </div>
            </div>


        </>
    )
}