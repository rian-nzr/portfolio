import Image from "next/image"
import {STACKS} from '../icons/stacks'

interface Type {
    modalOpen: () => void
}

export default function CardP({ modalOpen }: Type) {
    return (
        <>
            <div className="my-1 px-1 w-full lg:my-4 lg:px-4 " >
                <article className="overflow-hidden rounded-xl dark:bg-gray-900  bg-gray-100 shadow-lg">
                    <div>
                        <Image
                            src='/images/nextjs.png'
                            alt="photo"
                            width={1000}
                            height={1000}
                        />
                    </div>
                    <div className="py-5  px-4 md:px-8 flex flex-col gap-4 cursor-pointer" onClick={modalOpen}>
                        <div className="px-:px-4">
                            <h1 className="text-xl font-medium dark:text-gray-300 text-gray-900 title-font leading-relaxed">
                                PLN Log Dispatcher
                            </h1>
                        </div>
                        <div className="px-px-4 text-base">
                            <p className="dark:text-gray-400 text-gray-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error reprehenderit explicabo accusantium adipisci.</p>
                        </div>
                        <div className='flex flex-wrap items-center gap-4 pt-2'>
                            {STACKS["Next.js"]}
                            {STACKS["TypeScript"]}
                            {STACKS["Material UI"]}
                        </div>
                    </div>
                </article>
            </div>
        </>
    )
}