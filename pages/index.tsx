import HomePage from "@/components/sections/homepage"
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