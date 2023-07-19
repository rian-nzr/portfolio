import HomePage from "@/components/sections/homepage"
import Hero from "@/components/sections/homepage/hero"
import ListBlog from "@/components/sections/homepage/listblog"
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Home - Ryan</title>
            </Head>
            <main className="py-5">
                <HomePage/>  
            </main>
        </>
    )
}   