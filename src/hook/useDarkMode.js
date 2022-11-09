
import { useEffect, useState } from 'react'

export default function useDarkMode() {
    const [theme, setTheme] = useState(localStorage.theme)
    // const [themeclkcount, setThemeclkcount] = useState(0);
    const colorTheme = theme === "light" ? "dark" : "light";
    useEffect(() => {
        const darkRoot = window.document.documentElement;

        darkRoot.classList.remove(colorTheme)
        darkRoot.classList.add(theme)
        localStorage.setItem("theme", theme)

    }, [theme, colorTheme])

    return [colorTheme, setTheme]
}
