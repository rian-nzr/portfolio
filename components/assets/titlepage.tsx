import { BiSearch } from "react-icons/bi";

export default function TitlePage() {
    return (
        <div className="border-b dark:border-gray-700 border-gray-300 py-10 flex flex-col gap-5 px-5">
            <div className="">
                <h1 className="text-2xl lg:text-4xl font-medium ">All Posts</h1>
                <p className="leading-[1.5] md:leading-loose text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur voluptatibus excepturi repudiandae laboriosam, ea nulla ipsum rem autem est alias.</p>
            </div>

            <div className="relative flex items-center w-96 h-12 rounded-lg bg-gray-900 focus-within:shadow-lg border dark:border-gray-700 border-gray-300  overflow-hidden">
                <div className="grid place-items-center h-full w-12 text-gray-0">
                
                    <BiSearch className="text-2xl text-gray-700 dark:text-gray-400"/>
                </div>
                <input className=" h-full w-full outline-none bg-gray-900 text-gray-700 dark:text-gray-400 bg-transparent pl-2" type="text" id="search" placeholder="Search something.." />
            </div>
        </div>
    )
}