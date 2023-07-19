import { BiRightArrowAlt } from "react-icons/bi"
import CardBlog from "@/components/assets/cardblog"

export default function ListBlog() {
    return (
        <>
            <div className="flex items-center justify-between py-3">
                <h2 className="text-3xl">Latest Blogs</h2>
                <p className="flex items-center cursor-pointer dark:hover:text-white hover:text-black dark:text-gray-400 text-gray-700 gap-1">
                    View All Blogs <BiRightArrowAlt className="text-2xl" />
                </p>
            </div>

            <div className="container pl-20 pt-4 pb-10 mx-auto dark:text-gray-400 text-gray-700 flex flex-col gap-3 border-b dark:border-gray-800 border-gray-200">
               <CardBlog/>
               <CardBlog/>
               <CardBlog/>
            </div>


        </>
    )
}