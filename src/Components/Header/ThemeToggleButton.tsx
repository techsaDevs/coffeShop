"use client"
import React, { useEffect, useState } from 'react';
import MoonSVG from '../SVGs/nav/MoonSVG';
import SunSVG from '../SVGs/nav/SunSVG';

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState<boolean>(false)

  const handleToggleTheme = () => {
    const root = document.documentElement;
    if (theme) {
      setTheme(false);
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      setTheme(true);
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

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
      {theme ? <SunSVG /> : <MoonSVG />}
    </div>
  );
};

export default ThemeToggleButton;