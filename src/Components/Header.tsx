"use client"

import { useEffect, useState } from "react";
import { IHeaderMenu } from "@/Components/types";
import Link from "next/link";


const Header = () => {

  const [menu, setItems] = useState<IHeaderMenu[]>([
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
      <div className=""></div>
    </header>
  )
}

export default Header;