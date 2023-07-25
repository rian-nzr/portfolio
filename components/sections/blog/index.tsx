import TitlePage from "@/components/assets/titlepage";
import ListPost from "./listpost";

export default function BlogPage() {
    return (
        <>
            <TitlePage title="Blog" cari={true} desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda hic consequatur dolorem! Cumque beatae porro a natus quam amet autem!" />
            <ListPost />
        </>
    )
}