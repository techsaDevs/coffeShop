"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, Transition } from "framer-motion";
import MoonSVG from "../SVGs/nav/MoonSVG";
import SunSVG from "../SVGs/nav/SunSVG";

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState<boolean>(false);

  // تغییر تم و ذخیره در localStorage
  const handleToggleTheme = () => {
    const root = document.documentElement;
    const newTheme = !theme;
    setTheme(newTheme);

    if (newTheme) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // بارگذاری تم از localStorage در mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    const isDark = savedTheme === "dark";
    setTheme(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  // انیمیشن های Motion
  const iconVariants = {
    initial: { y: -10, scale: 0.8, rotate: -45, opacity: 0 },
    animate: { y: 0, scale: 1, rotate: 0, opacity: 1 },
    exit: { y: 10, scale: 0.8, rotate: 45, opacity: 0 },
  };

  // Transition بدون خطای TypeScript
  const iconTransition: Transition = { type: "tween", duration: 0.25 };

  return (
    <div
      className="relative cursor-pointer py-3 w-6 h-6"
      onClick={handleToggleTheme}
    >
      <AnimatePresence>
        <motion.div
          key={theme ? "sun" : "moon"}
          variants={iconVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={iconTransition}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          {theme ? <SunSVG /> : <MoonSVG />}
        </motion.div>
      </AnimatePresence>
      {/* Overlay برای جلوگیری از جهش کلیک */}
      <div className="absolute inset-0"></div>
    </div>
  );
};

export default ThemeToggleButton;