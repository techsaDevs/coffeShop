"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import BarSVG from '@/Components/SVGs/nav/mobile/BarSVG'
import SunSVG from '@/Components/SVGs/nav/SunSVG'
import LogoSVG from '@/Components/SVGs/nav/mobile/LogoSVG'
import MoonSVG from '@/Components/SVGs/nav/MoonSVG'
import UserSVG from '@/Components/SVGs/nav/UserSVG'
import CartSVG from '@/Components/SVGs/nav/CartSVG'
import XMarkSVG from '@/Components/SVGs/nav/mobile/XMarkSVG'
import LogoTypeSVG from '@/Components/SVGs/nav/mobile/LogoTypeSVG'
import InstagramSVG from '@/Components/SVGs/InstagramSVG'
import ArrowLeftEndOnRectangleSVG from '@/Components/SVGs/nav/ArrowLeftEndOnRectangleSVG'
import { motion, AnimatePresence } from "framer-motion";
import { toast } from 'react-toastify'
import { usePathname } from 'next/navigation'
import { useMenuStore } from '@/stores/menuStore'
import { useAuthStore } from '@/stores/authStore'
import { useThemeStore } from '@/stores/themeStore'
import { useBurgerMenuStore } from '@/stores/burgerMenuStore'

const BurgerMenu = () => {
  const pathname = usePathname();
  const { showBarMenu, openSubMenuId, toggleMenu, toggleSubMenu } = useBurgerMenuStore();
  const { theme, toggleTheme } = useThemeStore();
  const { menu, loading, getMenu } = useMenuStore();
  const {
    isLoggedin,
    user,
    setIsLoggedin,
    logout,
  } = useAuthStore()
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
          
          <div className="flex flex-col text-orange-300 gap-3 px-2.5">
            {/* دکمه ورود/ثبت‌نام یا پروفایل */}
            {!isLoggedin ? (
              <Link
                href="/login"
                className="flex items-center gap-2 w-max px-2 py-1 rounded-full cursor-pointer select-none group"
                title="ورود / ثبت‌نام"
              >
                <div className="w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <ArrowLeftEndOnRectangleSVG className="w-7 h-7 rotate-180 text-orange-300" />
                </div>
                <span className="text-sm xl:text-base select-none">ورود | ثبت‌نام</span>
              </Link>
            ) : (
              <Link
                href="/profile"
                className="flex items-center gap-2 w-max px-2 py-1 rounded-full cursor-pointer select-none group"
              >
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                  {user?.profile ? (
                    <img
                      src={user.profile}
                      alt={user.username}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <UserSVG className="w-full h-full" />
                  )}
                </div>
                <span className="text-sm xl:text-base">{user?.username}</span>
              </Link>
            )}

            {/* دکمه تغییر تم */}
            <motion.button
              className="flex items-center gap-2 w-max px-2 py-1 rounded-full cursor-pointer"
              onClick={toggleTheme}
              initial="rest"
              whileHover="hover"
              animate="rest"
              transition={{ duration: 0.35 }}
            >
              <motion.div
                className="w-8 h-8 flex items-center justify-center"
                variants={{
                  rest: { scale: 1, rotate: 0 },
                  hover: { scale: 1.2, rotate: theme ? -15 : 15 },
                }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {!theme ? (
                    <motion.div
                      key="moon"
                      initial={{ opacity: 0, x: 20, rotate: -90, scale: 0.8 }}
                      animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 20, rotate: 90, scale: 0.8 }}
                      transition={{ duration: 0.35 }}
                    >
                      <MoonSVG className="w-7 h-7" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sun"
                      initial={{ opacity: 0, x: 20, rotate: 90, scale: 0.8 }}
                      animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 20, rotate: -90, scale: 0.8 }}
                      transition={{ duration: 0.35 }}
                    >
                      <SunSVG className="w-7 h-7" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme ? "dark" : "light"}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  variants={{
                    rest: { x: 0 },
                    hover: { x: -2 }, // متن کمی حرکت می‌کند وقتی کل دکمه هاور شد
                  }}
                  transition={{ duration: 0.25 }}
                  className="text-sm xl:text-base"
                >
                  {!theme ? "تم تیره" : "تم روشن"}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            {/* دکمه سبد خرید */}
            {!isLoggedin ? (
              <button
                onClick={handleNotLoggedBasketClick}
                className="flex items-center gap-2 px-2 py-1 rounded-full cursor-pointer select-none group"
              >
                <div className="w-7 h-7 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <CartSVG className="w-7 h-7 text-orange-300" />
                </div>
                <span className="text-sm xl:text-base">سبد خرید</span>
              </button>
            ) : (
              <Link
                href="/basket"
                className="flex w-max items-center gap-2 px-2 py-1 rounded-full cursor-pointer select-none group"
              >
                <div className="w-7 h-7 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <CartSVG className="w-7 h-7 text-orange-300" />
                </div>
                <span className="text-sm xl:text-base">سبد خرید</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default BurgerMenu;


export const handleNotLoggedBasketClick = () => {
  toast.error(
    <div className="flex items-center justify-between gap-3 p-2">
      <span className="text-sm text-background">
        ابتدا وارد شوید
      </span>
      <Link
        href="/login"
        className="text-xs font-medium px-3 py-1.5 rounded-md 
                   bg-orange-500 text-white 
                   hover:bg-orange-600 transition-colors"
      >
        رفتن به صفحه ورود
      </Link>
    </div>,
    {
      position: "bottom-right",
      closeOnClick: true,
      pauseOnHover: true,
      autoClose: 4000,
      hideProgressBar: false,
    }
  );
};