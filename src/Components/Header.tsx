"use client"

import { useEffect, useState } from "react";
import { IHeaderMenu } from "@/Components/types";
import Link from "next/link";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import ShoppingCartSVG from "./SVGs/nav/ShoppingCartSVG";
import MoonSVG from "./SVGs/nav/MoonSVG";
import SunSVG from "./SVGs/nav/SunSVG";
import ArrowLeftEndOnRectangleSVG from "./SVGs/nav/ArrowLeftEndOnRectangleSVG";
import UserSVG from "./SVGs/nav/UserSVG";


const Header = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState({})
  const [menu, setMenu] = useState<IHeaderMenu[]>([
    {
      id: 1,
      title: "صفحه اصلی",
      link: "/"
    },
    {
      id: 2,
      title: "فروشگاه",
      link: "/",
    },
    {
      id: 3,
      title: "دیکشنری",
      link: "/"
    },
    {
      id: 4,
      title: "بلاگ",
      link: "/"
    },
    {
      id: 5,
      title: "درباره ما",
      link: "/"
    },
    {
      id: 6,
      title: "تماس باما",
      link: "/"
    }
  ])
  const [openMiniBasket, setOpenMiniBasket] = useState<boolean>(false)
  const [isLogin, setIslogin] = useState<boolean>(true)
  const [user, setUser] = useState({ username: "techsa team" })
  const [theme, setTheme] = useState<boolean>(false)

  const getMenuItems = async () => {
    try {
      setLoading(true)
      const { data } = await axios("http://localhost:3001/headerMenu")
      setMenu(data)
    } catch (err) {
      const error = err as AxiosError
      setError(error)
      toast.error("مشکلی در دریافت منو پیش آمد!", { position: "bottom-right" })
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const checkDefaultThemeInLocalStorage = () => {
    const savedTheme = localStorage.getItem("theme") || "light"
    if (savedTheme === "dark") setTheme(true);
    else setTheme(false)
  }

  const handleToggleTheme = () => {
    const savedTheme = localStorage.getItem("theme") || "light"
    if (savedTheme === "dark") {
      localStorage.setItem("theme", "light")
      setTheme(false)
    } else {
      localStorage.setItem("theme", "dark")
      setTheme(true)
    };
  }

  useEffect(() => {
    getMenuItems()
    checkDefaultThemeInLocalStorage()
  }, [])

  return (
    <header className='bg-black/50 w-[90%] h-24 mx-auto'>
      <div className="flex">
      {/* logo and menu */}
      <nav className="flex">
        {/* logo */}
        <div className="">
          <img className='' src="/app-logo.png" alt="Golden Coffe" />
        </div>
        {/* Menu */}
        <ul className="flex">
          {
            menu.map(({ id, title, link, subMenu }) => (
              <li className="" key={id}>
                <Link href={link}>{title}</Link>
                {
                  !subMenu?.length ? null : (
                    <ul className="hidden">
                      {/* subMenu */}
                      {
                        subMenu?.map(({ id, title, link }) => (
                          <li className="" key={id}>
                            <Link href={link} className="">{title}</Link>
                          </li>
                        ))
                      }
                    </ul>
                  )
                }
              </li>
            ))
          }
        </ul>
      </nav>
      {/* cart & theme toggle , login/register link */}
      <div className="flex">
        {/* basket & theme toggle */}
        <div className="flex">
          {/* basket logo */}
          <div className="">
            {
              isLogin ? (<div onClick={() => setOpenMiniBasket(!openMiniBasket)} className="cursor-pointer"> <ShoppingCartSVG /> </div>) : (<Link href={"/login"}> <ShoppingCartSVG /> </Link>)
            }
          </div>
          {/* theme toggle */}
          <div className="cursor-pointer" onClick={handleToggleTheme}>
            {theme !== null && (theme ? <MoonSVG /> : <SunSVG />)}
          </div>
        </div>
        {/* login link */}
        {
          isLogin ? (
            <Link href={"/login"} className="flex">
              <ArrowLeftEndOnRectangleSVG />
              ورود | ثبت نام
            </Link>
          ) : (
            <Link href={"/basket"} className="flex">
              <UserSVG />
              {user.username}
            </Link>
          )
        }
      </div>
      </div>
    </header>
  )
}

export default Header;