"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import { BarSVG } from "@/Components/SVGs";
import { SunSVG } from "@/Components/SVGs";
import { LogoSVG } from "@/Components/SVGs";
import { MoonSVG } from "@/Components/SVGs";
import { UserSVG } from "@/Components/SVGs";
import { CartSVG } from "@/Components/SVGs";
import { XMarkSVG } from "@/Components/SVGs";
import { LogoTypeSVG } from "@/Components/SVGs";
import { ChevronDownSVG } from "@/Components/SVGs";
import { ArrowLeftEndOnRectangleSVG } from "@/Components/SVGs";
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
  } = useAuthStore()
  // Fetch menu on mount
  useEffect(() => {
    getMenu().catch(err => {
      console.error("خطا در دریافت منو:", err);
      toast.error("مشکلی در دریافت منو پیش آمد!");
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
        className={`fixed top-0 right-0 z-50 bg-background w-72 h-screen overflow-y-auto pb-4 transition-transform duration-300
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
              {menu.map(({ id, title, link, Icon, subMenu }) => {
                const isActiveSubItem = subMenu?.some(({ link: subLink }) => pathname === subLink);
                const isActiveMain = pathname === link;

                return (
                  <li
                    onClick={() => toggleSubMenu(id)}
                    key={id}
                    className={`flex flex-col gap-1 duration-150 group rounded-lg p-3 
                    ${subMenu?.length && openSubMenuId === id ? "hover:bg-orange-300/0" : "hover:bg-orange-300/15"} 
                    ${isActiveMain ? "bg-orange-300/15" : isActiveSubItem ? "bg-transparent" : ""} 
                    ${subMenu?.length ? "cursor-pointer" : ""}`}
                  >
                    <div className="flex items-center justify-between duration-150">
                      <Link href={link} className="flex items-center gap-3" onClick={() => subMenu?.length ? {} : toggleMenu(false)}>
                        {Icon ? (
                          <Icon
                            width={24}
                            height={24}
                            className={`stroke-foreground group-hover:stroke-orange-300 
                            ${isActiveMain || isActiveSubItem ? "stroke-orange-300" : ""} 
                            transition-colors duration-150`}
                          />
                        ) : null}
                        <span
                          className={`transition-colors duration-150 group-hover:text-orange-300 
                          ${isActiveMain || isActiveSubItem ? "text-orange-300" : ""}`}
                        >
                          {title}
                        </span>
                      </Link>
                      {subMenu?.length && (
                        <button
                          className={`group-hover:text-orange-300 
                          ${isActiveMain || isActiveSubItem ? "text-orange-300" : ""}`}
                        >
                          <ChevronDownSVG
                            className={`duration-300 ${openSubMenuId === id ? "rotate-180" : "rotate-0"}`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Submenu */}
                    <AnimatePresence initial={false}>
                      {subMenu?.length && openSubMenuId === id && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="mt-2 pr-3 space-y-1 text-sm overflow-hidden"
                        >
                          {subMenu.map(({ id: subId, title: subTitle, link: subLink }) => {
                            const isActiveSub = pathname === subLink;
                            return (
                              <li
                                key={subId}
                                className={`relative rounded-md transition mr-2.5 hover:text-orange-300
                                ${isActiveSub ? "text-orange-300" : "text-foreground"}`}
                              >
                                <Link href={subLink} className={`block w-full py-1.5 ${isActiveSub ? "pr-7" : "pr-4"}`}>
                                  {subTitle}
                                </Link>

                                {isActiveSub && (
                                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-orange-300" />
                                )}
                              </li>
                            );
                          })}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>



          )}
          <span className='block h-px bg-basketItem-border my-8' />

          <div className="flex flex-col text-orange-300 gap-3 px-2.5">
            {/* دکمه ورود/ثبت‌نام یا پروفایل */}
            {!isLoggedin ? (
              <Link
                href="/login"
                className="flex items-center gap-4 w-max px-2 py-1 rounded-full cursor-pointer select-none group"
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
                className="flex items-center gap-4 w-max px-2 py-1 rounded-full cursor-pointer select-none group"
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
              className="flex items-center gap-4 w-max px-2 py-1 rounded-full cursor-pointer"
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
                onClick={() => handleNotLoggedBasketClick()}
                className="flex items-center gap-[19px] px-2 py-1 rounded-full cursor-pointer select-none group"
              >
                <div className="w-7 h-7 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <CartSVG className="w-7 h-7 text-orange-300" />
                </div>
                <span className="text-sm xl:text-base">سبد خرید</span>
              </button>
            ) : (
              <Link
                href="/basket"
                className="flex w-max items-center gap-[19px] px-2 py-1 rounded-full cursor-pointer select-none group"
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

interface IhandleNotLoggedBasketClick {
  logginMassage?: string;
  className?: string;
  parentClassName?: string;
}


export const handleNotLoggedBasketClick = (
  { logginMassage = "ابتدا وارد شوید", parentClassName = "", className = 'bg-orange-500 hover:bg-orange-600 text-white text-xs' }: IhandleNotLoggedBasketClick = {}
) =>
  toast.error(
    <div className={`flex items-center justify-between gap-3 p-2 ${parentClassName}`}>
      <span className="text-sm text-current">
        {logginMassage}
      </span>
      <Link
        href="/login"
        className={`font-medium px-3 py-1.5 rounded-md transition-all ${className}`}
      >
        لاگین | ثبت نام
      </Link>
    </div>,
    {
      closeOnClick: true,
      pauseOnHover: true,
      autoClose: 4000,
      hideProgressBar: false,
    }
  );