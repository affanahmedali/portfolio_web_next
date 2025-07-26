"use client"
import { useTheme } from "next-themes"
import { useEffect } from "react"
import { Button } from "./ui/button";
import {FaMoon, FaSun} from "react-icons/fa";

// to change the theme using useTheme hook from next-themes
// similar to use state

const ThemeSwitcher = ({ className = "" }) => {

    const {theme, setTheme} = useTheme();
    // uses objects instead of arrays
  return (
    <div className={className}>
        <Button variant="outline" size="icon" className="rounded-full" 
        onClick={()=> setTheme(theme =="light" ? "dark" : "light")}>
            <FaSun className="absolute h-10 w-10 rotate-0 scale-100 dark:rotate-90 dark:scale-0"> </FaSun>
            <FaMoon className="absolute h-10 w-10 rotate-90 scale-0 dark:rotate-0 dark:scale-100"> </FaMoon>

        </Button>
    </div>
  )
}

export default ThemeSwitcher
