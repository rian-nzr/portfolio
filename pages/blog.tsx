import BlogPage from "@/components/sections/blog"
import Head from "next/head"

export default function Blog() {
    return (
        <>
            <Head>
                <title>Blog - Ryan</title>
            </Head>
            <div className="">
                <BlogPage />
            </div>
        </>
    )
}