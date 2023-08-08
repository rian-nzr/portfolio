import { BiSearch } from "react-icons/bi";
import { ReactNode } from "react";

interface props {
    title: ReactNode;
    cari: boolean;
    desc: ReactNode
}

export default function TitlePage({ title, cari, desc }: props) {
    return (
        <div className="border-b dark:border-gray-700 border-gray-300 py-5 flex flex-col gap-5 px-3">
            <div className="">
                <h1 className="text-2xl lg:text-4xl font-medium ">{title}</h1>
                <p className="leading-[1.5] md:leading-loose text-gray-700 dark:text-gray-400">{desc}</p>
            </div>
            {!cari ? '' :
                <>
                    <div className="relative flex items-center w-96 h-12 rounded-lg dark:bg-gray-900 focus-within:shadow-lg border dark:border-gray-700 border-gray-400  overflow-hidden">
                        <div className="grid place-items-center h-full w-12 text-gray-0">

                            <BiSearch className="text-2xl text-gray-700 dark:text-gray-400" />
                        </div>
                        <input className=" h-full w-full outline-none bg-gray-900 text-gray-700 dark:text-gray-400 bg-transparent pl-2" type="text" id="search" placeholder="Search something.." />
                    </div>
                </>}
        </div>
    )
}