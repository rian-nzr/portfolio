import BlogList from "@/components/assets/bloglist";
import CardBlog from "@/components/assets/cardblog";
import BlogCardModeII from "@/components/assets/blogcardmodeii";
import { useState } from "react";
import Pagination from "@/components/assets/pagination";
import { BsGrid, BsHddStack } from 'react-icons/bs'
import CardP from "@/components/assets/cardP";

export default function ListP() {

   const arr = [1, 2, 3, 4, 5, 6];
   return (
      <>
         <div className="grid grid-cols-2 gap-12">
            {arr.map((item) => (
               <CardP key={item}/>
            ))}
         </div>
      </>
   )
}