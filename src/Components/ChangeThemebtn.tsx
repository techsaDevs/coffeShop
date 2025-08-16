"use client";
import Link from "next/link";
import { ReactNode } from "react";

interface IChangeThemebtn {
  title: string;
  icon: ReactNode;
}

const ChangeThemebtn = ({ title, icon }: IChangeThemebtn) => {
  const handleChangeTheme = () => {
    const root = document.documentElement;
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <Link
      onClick={handleChangeTheme}
      className="bg-blue-700 text-md inline-flex items-center justify-between px-2 cursor-pointer outline-none hover:bg-blue-800 duration-150 rounded-md py-2"
      href="/"
    >
      <span className="text-sm font-semibold text-white">{title}</span>
      {icon}
    </Link>
  );
};

export default ChangeThemebtn;