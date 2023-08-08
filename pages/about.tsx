import Head from "next/head"
import AboutHome from "@/components/sections/about"

export default function About() {
    return (
        <>
            <Head>
                <title>
                    About - Ryan
                </title>
            </Head>
            <div className="">
                <AboutHome />
            </div>

        </>
    )

}