import BlogList from "@/components/assets/bloglist";
import CardBlog from "@/components/assets/cardblog";
import BlogCardModeII from "@/components/assets/blogcardmodeii";
import { useState } from "react";
import Pagination from "@/components/assets/pagination";
import { BsGrid, BsHddStack } from 'react-icons/bs'

export default function ListPost() {
   const [mode, setMode] = useState(true);
   const arr = [1, 2, 3, 4, 5, 6, 7];
   return (
      <>
         <div className="flex items-center justify-between py-3 px-1">
            <h2 className="text-3xl">Latest Blogs</h2>
            <div className="flex gap-3">
               <button onClick={() => setMode(true)} className="border p-1 dark:border-gray-400 border-gray-600 rounded-md">
                  <BsGrid />
               </button>
               <button onClick={() => setMode(false)} className="border p-1 dark:border-gray-400 border-gray-600 rounded-md">
                  <BsHddStack />
               </button>
            </div>
         </div>
         <div className="flex flex-col gap-10">
            {!mode ?
               <div className="pl-14 flex flex-col gap-5 transition-all duration-1000">
                  {arr.map((item) => (
                     <CardBlog key={item} />
                  ))}

               </div> :
               <div className="flex flex-wrap justify-center transition-all duration-1000">
                  {arr.map((item) => (
                     <BlogCardModeII key={item} />
                  ))}
               </div>
            }
            <Pagination />
         </div>

      </>
   )
}