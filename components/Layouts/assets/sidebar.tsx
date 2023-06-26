import Image from "next/image";
import Link from "next/link";



export default function Sidebar() {
    return (
        <>
            <div className="sticky transition-all duration-300 top-0 z-10 flex flex-col lg:py-8">
                <div className="z-10 absolute shadow-sm xl:shadow-none lg:border-none dark:border-b dark:border-neutral-800 bg-light dark:bg-dark sm:!bg-transparent w-full p-5 lg:relative lg:p-0'">
                    <div
                        className=
                        'flex items-center gap-4 flex-grow lg:flex-col'
                    >
                        <Image
                            src='/images/myProfil.png'
                            alt='Ryan'
                            width={300}
                            height={300}
                            className=" rounded-full"
                        />

                        <Link href='/' passHref>
                            <h2 className='flex-grow text-lg lg:text-xl font-medium'>Ryan</h2>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}