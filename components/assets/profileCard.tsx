import Image from "next/image"

export default function ProfileCard() {
    return (
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-800 dark:text-gray-100">
            <Image
                src='/images/myrian.png'
                alt="profile"
                width={1000}
                height={1000}
                className="w-full"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracki">Donec lectus leo</h2>
                    <p className="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                </div>
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900">Read more</button>
            </div>
        </div>
    )
}