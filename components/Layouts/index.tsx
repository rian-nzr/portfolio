import { ReactNode } from "react"
import Sidebar from "./assets/sidebar";
import Header from "./assets/header";
import { useState } from "react";


interface props {
    children: ReactNode;
}

export default function Layout({ children, }: props) {
    const [open, setOpen] = useState(true);

    return (
        <>
            <div className="">
                <Header setfitur={setOpen} fitur={open}/>
                <div className='flex flex-col sm:flex-row sm:gap-5'>
                    <div className="w-auto">
                        <div className="sticky top-14 sm:block hidden">
                            <Sidebar fitur={open} />
                        </div>
                    </div>
                    <main className='lg:w-4/5  lg:max-w-6xl container bg-white mx-auto transition-all duration-300'>
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}