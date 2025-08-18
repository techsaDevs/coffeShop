"use client"

import { useEffect, useState } from "react";
import { IHeaderMenu } from "@/Components/types";
import Link from "next/link";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";


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

  const handleToggleTheme = () => {
    const localSavedTheme = JSON.parse(localStorage.getItem("theme") || "no theme")
    console.log(localSavedTheme)
  }

  useEffect(() => { getMenuItems() }, [])

  return (
    <header className=''>
      {/* logo and menu */}
      <nav className="">
        {/* logo */}
        <div className="">
          <img className='' src="/app-logo.png" alt="Golden Coffe" />
        </div>
        {/* Menu */}
        <ul className="">
          {
            menu.map(({ id, title, link, subMenu }) => (
              <li className="" key={id}>
                <Link href={link}>{title}</Link>
                {
                  !subMenu?.length ? null : (
                    <ul className="">
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
      <div className="">
        {/* basket & theme toggle */}
        <div className="">
              {/* basket logo */}
            <div className=""></div>
            {/* theme toggle */}
            <div className="" onClick={handleToggleTheme}>
              {
                true ? (<></>) : (<></>)
              }
            </div>
        </div>
        {/* login link */}
        <Link href={"/login"} className="">
              {/* login logo */}
              ورود | ثبت نام
        </Link>
      </div>
    </header>
  )
}

export default Header;