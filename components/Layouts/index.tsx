import { ReactNode } from "react"
import Sidebar from "./assets/sidebar";


interface props {
    children: ReactNode;
}

export default function Layout({ children }: props) {
    return (
        <>
            <div
                className="max-w-6xl mx-auto lg:px-8 lg:py-4 xl:py-10"
            >
                <div className='flex flex-col lg:flex-row lg:gap-5'>
                    <header className='lg:w-1/5'>
                        <Sidebar /> 
                    </header>
                    <main className='lg:w-4/5 max-w-[854px] transition-all duration-300'>
                        {children}
                        {/* <Footer /> */}
                    </main>
                </div>
            </div>
        </>
    )
}