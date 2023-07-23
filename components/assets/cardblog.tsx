export default function CardBlog() {
    return (
        <>
            <div className="py-4 flex flex-wrap md:flex-nowrap border-t dark:border-gray-900 border-gray-300">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span className="font-semibold title-font ">CATEGORY</span>
                    <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                </div>
                <div className="md:flex-grow flex flex-col gap-4 pb-2">
                    <div className="">
                        <h2 className="text-3xl font-medium dark:text-white text-gray-900 title-font">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
                        <p className=" font-medium text-blue-700">#taqapagitu</p>
                    </div>
                    <p className="leading-relaxed md:leading-loose">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum perferendis quisquam in animi hic nihil odit laborum. Obcaecati, reprehenderit earum.</p>
                </div>
            </div>
        </>
    )
}