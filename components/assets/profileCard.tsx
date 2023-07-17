import Image from "next/image"
import { BiSolidDownload, BiBriefcase } from 'react-icons/bi'
import { MdOutlineLocationOn, MdOutlineEmail } from "react-icons/md"
import { BsFacebook, BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs"

export default function ProfileCard() {
    return (
        <div className="max-w-xs rounded-xl dark:shadow-blue-500/50 shadow-amber-500/40 dark:bg-gray-900 dark:text-gray-100 shadow-2xl cursor-pointer overflow-hidden hover:scale-105 hover:-translate-y-2 transition-transform duration-500 ">
            <Image
                src='/images/hdphoto.png'
                alt="profile"
                width={1000}
                height={1000}
                className="w-full"
            />
            <div className="flex flex-col justify-between py-2 px-4 space-y-5">
                <div className="flex flex-col gap-4">
                    <div className="">
                        <h2 className="text-xl font-semibold">RIAN</h2>
                        <p className="dark:text-gray-400 text-gray-500 text-base">Learner | Builder</p>
                    </div>
                    <ul className=" dark:text-gray-300 text-gray-600 flex flex-col gap-2">
                        <li className="flex items-start gap-2 text-base">
                            <BiBriefcase className="text-xl dark:text-gray-300 text-gray-500" />
                            Freelancer
                        </li>
                        <li className="flex items-start gap-2 text-base">
                            <MdOutlineLocationOn className="text-xl dark:text-gray-300 text-gray-500" />
                            Aceh, Indonesia
                        </li>
                        <li className="flex items-start gap-2 text-base">
                            <MdOutlineEmail className="text-xl dark:text-gray-300 text-gray-500" />
                            riannazar03@gmail.com
                        </li>
                    </ul>
                    <div className=" flex w-2/4 mx-auto justify-around text-xl dark:text-gray-200 text-gray-700">
                        <BsInstagram />
                        <BsGithub />
                        <BsLinkedin />
                    </div>
                </div>
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-amber-600 text-slate-800 dark:bg-blue-500 dark:text-gray-900">
                    Download CV <BiSolidDownload className="text-xl ml-2" />
                </button>
            </div>
        </div>
    )
}