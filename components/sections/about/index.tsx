import TitlePage from "@/components/assets/titlepage";
import ProfileCard from "@/components/assets/profileCard";
import SkillBar from "@/components/assets/skillbar";
import { BsFacebook, BsLinkedin, BsGithub, BsInstagram , BsTwitter} from "react-icons/bs"
import {MdMail} from "react-icons/md"

export default function AboutHome() {
  return (
    <>
      <TitlePage title='About' cari={false} desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, maiores." />

      <section className='gap-10 flex mt-5 relative'>
        <div className="w-[28%]  top-0">
          <div className=" sticky top-16">
          <ProfileCard />
          </div>
        </div>
        <div className="w-[72%] flex flex-col gap-16">
          <div className="space-y-3">
            <div className='flex gap-2 text-2xl lg:text-4xl font-medium '>
              <h1>Hi, I&apos;m Ryan</h1>
              <div className='ml-1'>👋</div>
            </div>
            <div className='space-y-5'>
              <p className='leading-[1.5] md:leading-loose text-gray-700 dark:text-gray-400 text-lg'>
                Seasoned Software Engineer especially in Frontend side, with a passion
                for creating pixel-perfect web experiences. I work with JavaScript and
                specialize in all-things web. I thrive on collaborating with teams to
                deliver efficient, scalable, and visually appealing web applications.
              </p>
              <p className="leading-[1.5] md:leading-loose text-gray-700 dark:text-gray-400 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae mollitia iste voluptatem assumenda laudantium, doloremque deserunt nulla fugiat consequuntur, rerum explicabo obcaecati natus id quibusdam pariatur aspernatur error cum ullam?</p>
            </div>
          </div>
          {/* start my skill */}
          <div className="">
            <div className="flex justify-between items-center py-2">
              <h2 className="text-xl lg:text-3xl font-medium">My Skill</h2>
              <p className="text-gray-600 dark:text-gray-500">Read More</p>
            </div>
            <p className="leading-[1.5] text-gray-700 dark:text-gray-400 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="my-5 flex flex-col gap-4">
              <SkillBar />
            </div>
          </div>
          {/* start my skill */}
          {/* start my career */}
          <div className="">
            <h2 className="text-xl lg:text-3xl font-medium">My Career</h2>

            <div className="my-5 flex flex-col gap-4">
              <h3 className="text-2xl font-medium dark:text-gray-300 text-gray-700">Web Developer di Yabenbit</h3>
              <p className="text-gray-700 dark:text-gray-400 text-lg italic">November 2022 - April 2023</p>
              <ul className="leading-[1.5] md:leading-loose text-gray-700 dark:text-gray-400 text-lg list-disc pl-7 flex flex-col gap-4">
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, possimus.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
              </ul>
            </div>
          </div>
          {/* end my career */}
          <div className="">
            <h2 className="text-xl lg:text-3xl font-medium">Why have this blog?</h2>

            <div className="my-5 flex flex-col gap-4">
              <div className="dark:bg-gray-900 bg-gray-200 py-5 px-3 border-l-4 dark:border-blue-600 border-yellow-600">
                <p className="leading-[1.5] md:leading-loose text-gray-700 dark:text-gray-400 text-lg italic">	&quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.&quot;</p>

              </div>
              <p className="leading-[1.5] md:leading-loose text-gray-700 dark:text-gray-400 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni similique accusantium delectus rerum iste tenetur, saepe ut in, nesciunt suscipit perferendis error debitis dolore repudiandae, dolor voluptate voluptas eius. Corrupti!</p>
            </div>
          </div>
          <div className="">
            <h2 className="text-xl lg:text-3xl font-medium">Contact</h2>

            <div className="my-5 flex flex-col gap-4 border-b py-5 dark:border-gray-800 border-gray-200">
              <p className="leading-[1.5] md:leading-loose text-gray-700 dark:text-gray-400 text-lg">Lorem ipsum dolor sit amet consectetur.</p>
              <div className=" flex justify-start gap-8 items-center text-xl dark:text-gray-400 text-gray-700">
                <BsInstagram />
                <BsGithub />
                <BsLinkedin />
                <MdMail className="text-2xl"/>
                <BsFacebook/>
                <BsTwitter/>
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  )
}