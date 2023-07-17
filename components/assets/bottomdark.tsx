import { useTheme } from "next-themes"
import { BiSun, } from "react-icons/bi";
import { PiMoonStarsDuotone } from "react-icons/pi"
import { SetStateAction, useState, useEffect } from "react"



export default function BottomDark() {
    const [isAnimating, setIsAnimating] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();
    const [drakMode, setDrak] = useState(false);
    useEffect(() => {
        setDrak(true)
    }, []);
    const toggleDarkMode = () => {

        const currentTheme = theme === "system" ? systemTheme : theme;
        if (!drakMode) return null;
        if (currentTheme === 'dark') {
            return (

                <PiMoonStarsDuotone className="text-blue-600" onClick={() => setTheme('light')} />
            )
        } else {
            return (
                <BiSun className="text-amber-700" onClick={() => setTheme('dark')} />
            )
        }
    };
    const buttonAnimation = () => {
        setIsAnimating(true);

        setTimeout(() => {
            setIsAnimating(false);
        }, 500);
    }
    return (
        <button onClick={buttonAnimation} className={`duration-1000 cursor-pointer font-bold text-2xl ${isAnimating && "rotate-[100deg] opacity-0 scale-0"}`}>
            {toggleDarkMode()}
        </button>
    )

}