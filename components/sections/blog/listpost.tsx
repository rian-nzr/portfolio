import BlogList from "@/components/assets/bloglist";
import CardBlog from "@/components/assets/cardblog";

export default function ListPost() {
   return (
      <>
         <div className="flex items-center justify-between py-3 px-1">
            <h2 className="text-3xl">Latest Blogs</h2>
          
         </div>
         <div className="pl-14 flex flex-col gap-5">
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
         </div>
      </>
   )
}