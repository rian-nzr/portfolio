import Image from "next/image"


export default function BlogCardModeII() {
    return (
        <>
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                {/* Article */}
                <article className="overflow-hidden rounded-lg dark:bg-gray-900  bg-gray-200 shadow-lg">
                    <div>
                        {/* <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" /> */}
                        <Image
                            src='/images/nextjs.png'
                            alt="photo"
                            width={1000}
                            height={1000}
                        />
                    </div>
                    <div className="pb-5 pt-3 flex flex-col gap-2">
                        <div className="px-2 md:px-4 space-y-">
                            <div className="flex mb-2">
                                <p className=" font-medium text-xs  bord rounded-lg text-white px-1 py-1 bg-blue-700">taqapagitu</p>
                            </div>
                            <h1 className="text-xl font-medium dark:text-white text-gray-900 title-font">
                                Bitters hashtag waistcoat fashion axe chia unicorn
                            </h1>

                            <div className='flex gap-4 text-neutral-600 dark:text-neutral-400'>
                                <div className='flex gap-1 items-center '>
                                    <span className='text-xs'>
                                    Jun 23, 2023
                                    </span>
                                </div>

                            </div>

                        </div>
                        <div className="px-2 md:px-4 text-sm">
                            <p className="dark:text-gray-400 text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </article>
                {/* END Article */}
            </div>
            {/* END Column */}
        </>
    )
}