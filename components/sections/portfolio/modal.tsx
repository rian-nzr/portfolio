import { join } from "path";
import { useState } from "react";
import { MdClose } from "react-icons/md"
import { SetStateAction, Dispatch } from "react"



interface ModalProps {
  isOpen: boolean;
  isAnimating: boolean
  onClose: any;
}
export default function Modal({ isOpen, onClose, isAnimating }: ModalProps) {

  return (
    <>
      <div className={`fixed top-0 left-0 min-w-full  h-screen z-10 flex items-center justify-center transition-all duration-1000  ${!isOpen ? 'block' : 'hidden'}`}>
        <div className={`mx-auto w-1/2 dark:bg-gray-950 bg-white z-30 rounded-xl shadow-lg p-8 relative transition-all duration-700 ${isAnimating && !isOpen ? "scale-50 opacity-0" : "scale-100"}`}>
          <button className="absolute top-0 right-0 text-2xl font-semibold pt-3 px-4" onClick={onClose}><MdClose /></button>
          <div className="" >
            hbh
          </div>
        </div>
        <div className={`fixed top-0 left-0 w-full h-screen bg-gray-700/20 backdrop-blur-sm blur-sm z-20 transition-all duration-700 ${isAnimating && !isOpen ? "opacity-0" : "opacity-100"}`} onClick={onClose} />
      </div>
    </>
  )
}