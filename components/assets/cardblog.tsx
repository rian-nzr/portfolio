export default function CardBlog() {
    return (
        <>
            <div className="py-4 flex flex-wrap md:flex-nowrap border-b border-gray-800">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span className="font-semibold title-font ">CATEGORY</span>
                    <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                </div>
                <div className="md:flex-grow flex flex-col gap-4 pb-2">
                    <div className="">
                        <h2 className="text-3xl font-medium dark:text-white text-gray-900 title-font">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
                        <p className=" font-medium text-blue-700">#taqapagitu</p>
                    </div>

                    <p className="leading-relaxed md:leading-loose">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>

                </div>
            </div>
        </>
    )
}