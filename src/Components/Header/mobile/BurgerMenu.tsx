"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { toast } from 'react-toastify'
import InstagramSVG from '@/Components/SVGs/InstagramSVG'
import BarSVG from '@/Components/SVGs/nav/mobile/BarSVG'
import XMarkSVG from '@/Components/SVGs/nav/mobile/XMarkSVG'
import LogoSVG from '@/Components/SVGs/nav/mobile/LogoSVG'
import LogoTypeSVG from '@/Components/SVGs/nav/mobile/LogoTypeSVG'
import { useBurgerMenuStore } from '@/stores/burgerMenuStore'
import { useMenuStore } from '@/stores/menuStore'

const BurgerMenu = () => {
  const pathname = usePathname();
  const { showBarMenu, openSubMenuId, toggleMenu, toggleSubMenu } = useBurgerMenuStore();
  const { menu, loading, getMenu } = useMenuStore();

  // Fetch menu on mount
  useEffect(() => {
    getMenu().catch(err => {
      console.error("خطا در دریافت منو:", err);
      toast.error("مشکلی در دریافت منو پیش آمد!", { position: "bottom-right" });
    });
  }, [getMenu]);

  return (
    <>
      <button className="cursor-pointer px-4 py-5" onClick={() => toggleMenu(true)}>
        <BarSVG className="stroke-foreground" />
      </button>

      {showBarMenu && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => toggleMenu(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 z-50 bg-background w-72 h-screen transition-transform duration-300
          ${showBarMenu ? "translate-x-0" : "translate-x-72"}
        `}
      >
        <div className="flexBetween pb-3">
          <div className="flex gap-3.5 pr-4">
            <LogoSVG width={41} className='h-10' />
            <LogoTypeSVG className="w-25" width={100} height={40} fill="oklch(83.7% 0.128 66.29)" />
          </div>
          <button className="p-4 pt-3 pr-8 cursor-pointer" onClick={() => toggleMenu(false)}>
            <XMarkSVG width={24} height={24} className='stroke-foreground' />
          </button>
        </div>

        <span className='block h-px bg-basketItem-border px-4 mx-4 mb-2' />

        <div className="p-4 text-foreground">
          {loading ? (
            <p>در حال بارگذاری منو...</p>
          ) : (
            <ul className="space-y-2.5">
              {menu.map(({ id, title, link, subMenu }) => (
                <li className="flex flex-col gap-1 bg-orange-300/20 rounded-lg p-3" key={id}>
                  <div className="flex items-center justify-between">
                    <Link href={link} className="flex items-center gap-3">
                      <InstagramSVG width={24} height={24} className='stroke-foreground' />
                      {title}
                    </Link>
                    {subMenu?.length && (
                      <button onClick={() => toggleSubMenu(id)}>
                        {openSubMenuId === id ? "-" : "+"}
                      </button>
                    )}
                  </div>

                  {subMenu?.length && openSubMenuId === id && (
                    <ul className="mt-2 pl-7 space-y-1">
                      {subMenu.map(({ id: subId, title, link }) => (
                        <li key={subId}>
                          <Link href={link}>{title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
          <span className='block h-px bg-basketItem-border my-8' />
        </div>
      </div>
    </>
  )
}

export default BurgerMenu
