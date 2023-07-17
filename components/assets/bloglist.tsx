import { BsFillCalendar2WeekFill } from 'react-icons/bs';
import { AiTwotoneEdit } from 'react-icons/ai'
import { SiAboutdotme } from "react-icons/si"
import { BiBriefcase } from 'react-icons/bi'
import Link from 'next/link';

export default function BlogList() {
    return (
        <>
            <div className="flex flex-col space-y-2 text-gray-800 dark:text-gray-400 text-lg">
                <Link href="/portfolio" className="hover:underline flex items-start gap-2">
                    <BsFillCalendar2WeekFill className='text-gray-950 dark:text-gray-200' />
                    <span data-umami-event="" className="ml-1.5">
                        What have I built?
                    </span>
                </Link>
                <Link href="/blog" className="hover:underline flex items-start gap-2">
                    <AiTwotoneEdit className='text-xl text-gray-950 dark:text-gray-200' />
                    <span data-umami-event="home-link-blog" className="ml-1">
                        My writings
                    </span>
                </Link>
                <Link href="/about" className="hover:underline flex items-start gap-2">
                    <SiAboutdotme className='text-2xl text-gray-950 dark:text-gray-200' />
                    <span data-umami-event="home-link-about" className="ml- ">
                        More about me and myself
                    </span>
                </Link>
                <Link href="#" className="hover:underline flex items-start gap-2">
                    <BiBriefcase  className='text-xl text-gray-950 dark:text-gray-200'/>
                    <span data-umami-event="home-link-resume" className="ml-1.5">
                        My career
                    </span>
                </Link>

            </div>
        </>
    )
}