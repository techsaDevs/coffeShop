"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence, Transition } from "framer-motion";
import MoonSVG from "../SVGs/nav/MoonSVG";
import SunSVG from "../SVGs/nav/SunSVG";
import { useThemeStore } from "@/stores/themeStore"; // مسیر استور

export const iconVariants = {
  initial: { y: -10, scale: 0.8, rotate: -45, opacity: 0 },
  animate: { y: 0, scale: 1, rotate: 0, opacity: 1 },
  exit: { y: 10, scale: 0.8, rotate: 45, opacity: 0 },
};

export const iconTransition: Transition = { type: "tween", duration: 0.25 };

const ThemeToggleButton = () => {
  const { theme, toggleTheme, initTheme } = useThemeStore();

  useEffect(() => {
    initTheme(); // بار اول بخونه از localStorage
  }, [initTheme]);

  return (
    <div
      className="relative cursor-pointer py-3 w-8 h-8"
      onClick={toggleTheme}
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
          {theme ? <SunSVG className="size-8"/> : <MoonSVG className="size-8"/>}
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0" />
    </div>
  );
};

export default ThemeToggleButton;
