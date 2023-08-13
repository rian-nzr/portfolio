import { join } from "path";
import { useState } from "react";
import { MdClose } from "react-icons/md"
import { SetStateAction, Dispatch } from "react"
import Image from "next/image";
import { STACKS } from '../../icons/stacks'
import {SiGithub} from "react-icons/si"

interface ModalProps {
  isOpen: boolean;
  isAnimating: boolean
  onClose: any;
}
export default function Modal({ isOpen, onClose, isAnimating }: ModalProps) {

  return (
    <>
      <div className={`fixed top-0 left-0 min-w-full  h-screen z-10 flex items-center  justify-center transition-all duration-1000  ${!isOpen ? 'block' : 'hidden'}`}>
        <div className={`mx-auto lg:w-[40%] w-[60%] max-h-[90%]  overflow-auto dark:bg-gray-950  bg-white z-30 rounded-xl shadow-lg py-5 transition-all duration-500 ${isAnimating && !isOpen ? "scale-75 opacity-0" : "scale-100 opacity-100"}`}>
          <div className="flex items-center justify-between sticky top-0 dark:bg-gray-950  m-8 my-0 py-4 bg-white border-b border-dashed dark:border-gray-700 border-gray-300">
            <h1 className="text-2xl font-medium dark:text-gray-300 text-gray-900 title-font leading-relaxed">
              PLN Log Dispatcher
            </h1>
            <button className="text-2xl font-semibold " onClick={onClose}>
              <MdClose />
            </button>
          </div>
          <div className="mx-8 py-5">
            <div className="flex pb-5 gap-3 items-center justify-between">
              <div className='flex flex-wrap items-center gap-4 pt-2'>
                {STACKS["Next.js"]}
                {STACKS["TypeScript"]}
                {STACKS["Material UI"]}
              </div>
              <div className="flex gap-1 items-center text-blue-500 text-lg">
                <button className="">
                  Source Code
                </button>
                <span className="dark:text-gray-50 text-gray-800">|</span>
                <button>
                  Live Demo
                </button>
              </div>
            </div>
            <div className="bg-red-600 flex items-center justify-center overflow-hidden rounded-xl mb-5">
              <Image
                src='/images/pln.png'
                alt="photo"
                width={1000}
                height={1000}
                className="w-full"
              />
            </div>
            <p className="dark:text-gray-400 text-gray-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error reprehenderit explicabo accusantium adipisci.</p>
          </div>
        </div>
        <div className={`fixed top-0 left-0 w-full h-screen bg-gray-700/20 backdrop-blur-sm blur-sm z-20 transition-all duration-500 ${isAnimating && !isOpen ? "opacity-0" : "opacity-100"}`} onClick={onClose} />
      </div>
    </>
  )
}