import { BiRocket } from "react-icons/bi"

export default function Servicer() {
    return (
        <>
            <div className="flex items-center justify-between py-3">
                <h2 className="text-3xl">Services</h2>
            </div>
            <p className=" text-justify pl-5 text-gray-700 dark:text-gray-400 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi architecto quidem similique laudantium ipsa reprehenderit quaerat, aliquid expedita alias vitae, officiis fugit sint aperiam rem?</p>
            <div className='p-8 bg-gray-300 dark:bg-gray-900 border dark:border-none rounded-xl space-y-4 mx-20 mt-5'>
                <div className='flex gap-2 items-center'>
                    <BiRocket size={24} />
                    <h3 className='text-xl font-medium'>Lets work together!</h3>
                </div>
                <p className='leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300 pl-2'>
                    I&apos;m open for freelance projects, feel free to email me to see how
                    can we collaborate.
                </p>
                <button
                    className={`flex gap-2 items-center bg-gray-500 hover:bg-neutral-600 dark:bg-gray-600 dark:hover:bg-gray-700 text-gray-50 py-2 px-4 rounded-lg transition-all duration-300 text-[15px] font-sora `}>
                    Contact me
                </button>
            </div>
        </>
    )
}