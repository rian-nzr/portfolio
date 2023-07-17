import ProfileCard from "../assets/profileCard"
import TypedBios from "../assets/typedbios"
import BlogList from "../assets/bloglist"
import {BiHappyBeaming} from "react-icons/bi"

export default function Hero() {
    return (
        <section className='gap-10 flex border-b pb-10 mt-5 dark:border-gray-700 border-gray-200'>
            <div className="w-[28%] bg-b">
                <ProfileCard />
            </div>
            <div className="space-y-3 w-[72%]">

                <div className='flex gap-2 text-2xl lg:text-4xl font-medium '>
                    <h1>Hi, I&apos;m Ryan</h1>
                    <div className='ml-1'>👋</div>
                </div>
                <div className='space-y-5'>
                    <TypedBios />
                    <p className='leading-[1.5] md:leading-loose text-gray-700 dark:text-gray-400 text-lg'>
                        Seasoned Software Engineer especially in Frontend side, with a passion
                        for creating pixel-perfect web experiences. I work with JavaScript and
                        specialize in all-things web. I thrive on collaborating with teams to
                        deliver efficient, scalable, and visually appealing web applications.
                    </p>
                    <BlogList/>
                    <p className="text-gray-700 dark:text-gray-400 text-lg flex items-center">
                    Happy reading ;)
                    </p>
                </div>
            </div>
        </section>

    )
}