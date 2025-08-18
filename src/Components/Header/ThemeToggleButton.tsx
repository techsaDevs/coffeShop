"use client"
import React, { useEffect, useState } from 'react';
import MoonSVG from '../SVGs/nav/MoonSVG';
import SunSVG from '../SVGs/nav/SunSVG';

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState<boolean>(false)

  const handleToggleTheme = () => {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem("theme") || "light"
    console.log(savedTheme)
    if (savedTheme === "dark") {
      localStorage.setItem("theme", "light")
      root.classList.remove("dark");
      setTheme(false)
    } else {
      localStorage.setItem("theme", "dark")
      root.classList.add("dark");
      setTheme(true)
    };
  }

    const checkDefaultThemeInLocalStorage = () => {
    const savedTheme = localStorage.getItem("theme") || "light"
    if (savedTheme === "dark") setTheme(true);
    else setTheme(false)
  }

  useEffect(() => {
    checkDefaultThemeInLocalStorage()
  }, [])

  return (
    <div className="cursor-pointer" onClick={handleToggleTheme}>
      {theme !== null && (theme ? <MoonSVG className='stroke-orange-200' /> : <SunSVG className='stroke-orange-200' />)}
    </div>
  );
};

export default ThemeToggleButton;