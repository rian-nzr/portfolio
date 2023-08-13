import { ReactNode } from "react"
import Sidebar from "./assets/sidebar";
import Header from "./assets/header";
import { useState } from "react";
import { Footer } from "./assets/footer";


interface props {
    children: ReactNode;
}

export default function Layout({ children, }: props) {
    const [open, setOpen] = useState(true);

    return (
        <>
            <div className="transition-all duration-500">
                <Header setfitur={setOpen} fitur={open} />
                <div className='flex flex-col sm:flex-row sm:gap-5 relative top-14'>
                    <div className="w-auto">
                        <div className="sticky top-8 sm:block hidden ">
                            <Sidebar fitur={open} />
                        </div>
                    </div>

                    <main className='lg:w-4/5  lg:max-w-5xl container  mx-auto   flex flex-col justify-between min-h-screen '>
                        <div className=" min-h-screen flex flex-col justify-between">
                            {children}
                            <Footer />
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}