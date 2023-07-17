import { RiMenuUnfoldLine, RiMenuFoldLine } from "react-icons/ri"
import { IoIosCall } from "react-icons/io"
import { SetStateAction} from "react"
import { Dispatch } from "react";
import BottomDark from "@/components/assets/bottomdark";

interface props {
    fitur: boolean;
    setfitur: Dispatch<SetStateAction<boolean>>;

}

export default function Header({ fitur, setfitur }: props) {
       return (
        <div className="fixed w-full dark:bg-gray-900 bg-white top-0 z-10 border-b dark:border-gray-600 border-gray-300 px-4">
            <div className="flex py-3 items-center justify-between">
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
                    <BottomDark />
                </div>
            </div>

        </div>
    )
}