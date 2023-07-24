import PortfolioPage from "@/components/sections/portfolio"
import Head from "next/head"


export default function Portfolio() {
    return (
        <>
            <Head>
                <title>Portfolio - Ryan</title>
            </Head>
            <div className="">
                <PortfolioPage />
            </div>
        </>
    )

}