"use client"
import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import ArrowLeftEndOnRectangleSVG from '../SVGs/nav/ArrowLeftEndOnRectangleSVG'
import UserSVG from '../SVGs/nav/UserSVG'
import Link from 'next/link'

const NavLogin = () => {
  const [isLoggedin, setIsLoggedin] = useState<boolean>(true)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isDesktop, setIsDesktop] = useState<boolean>(false)
  const [user, setUser] = useState({
    profile: "/categories/category2.png",
    username: "techsa team",
    logout: () => alert("Logged out!"),
  })

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1280) // xl breakpoint
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (!isLoggedin) {
    return (
      <Link
        href="/login"
        className="flex items-center px-2 py-1 xl:px-4 xl:py-3 rounded-full hover:bg-orange-200/10 gap-2 xl:gap-3 duration-150 mr-6 cursor-pointer"
        title="ورود / ثبت‌نام"
      >
        <ArrowLeftEndOnRectangleSVG className='rotate-180 w-full h-full xl:w-6 xl:h-6' />
        <span className='text-sm hidden xl:text-xl select-none tracking-tightest'>
          ورود | ثبت نام
        </span>
      </Link>
    )
  }

  return (
    <div className="relative mr-2 xl:mr-5 flex justify-end group">
      <div
        onClick={() => !isDesktop && setIsOpen(!isOpen)}
        className="flex items-center px-2 py-1 xl:px-4 xl:py-3 rounded-full hover:bg-orange-200/10 gap-0 xl:gap-3 cursor-pointer select-none"
      >
        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
          {user?.profile ? (
            <img src={user.profile} alt={user.username} className="w-full h-full object-cover" />
          ) : (
            <UserSVG className="w-full h-full" />
          )}
        </div>
        <span className="hidden xl:inline-block text-sm xl:text-lg mt-[3px]">
          {user.username}
        </span>
      </div>

      {!isDesktop && isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 5 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 mt-10 w-[300px] p-5 z-10 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
        >
          <a href="/profile" className="flex items-center gap-3 cursor-pointer">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              {user?.profile ? (
                <img src={user?.profile} alt={user.username} className="w-full h-full object-cover" />
              ) : (
                <UserSVG className="w-full h-full" />
              )}
            </div>
            <span className="text-sm xl:text-base font-semibold text-foreground">{user.username}</span>
          </a>

          <motion.button
            onClick={() => setIsLoggedin(false)}
            className="
              w-full px-4 py-2 mt-3
              bg-transparent text-red-600 dark:text-red-400
              flex items-center justify-center gap-2
              rounded-xl font-medium text-sm xl:text-base
              border border-red-400 dark:border-red-600
              transition-colors duration-300
              hover:bg-red-500 dark:hover:bg-red-600
              hover:text-white
              shadow-md hover:shadow-xl
              cursor-pointer
            "
          >
            خروج
          </motion.button>
        </motion.div>
      )}

      {isDesktop && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          whileHover={{ opacity: 1, y: 5 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 mt-10 w-[300px] p-5 z-10 bg-white dark:bg-gray-800 rounded-xl shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
        >
          <a href="/profile" className="flex items-center gap-3 cursor-pointer">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              {user?.profile ? (
                <img src={user?.profile} alt={user.username} className="w-full h-full object-cover" />
              ) : (
                <UserSVG className="w-full h-full" />
              )}
            </div>
            <span className="text-sm xl:text-base font-semibold text-foreground">{user.username}</span>
          </a>

          <motion.button
            onClick={user.logout}
            className="
              w-full px-4 py-2 mt-3
              bg-transparent text-red-600 dark:text-red-400
              flex items-center justify-center gap-2
              rounded-xl font-medium text-sm xl:text-base
              border border-red-400 dark:border-red-600
              transition-colors duration-300
              hover:bg-red-500 dark:hover:bg-red-600
              hover:text-white
              shadow-md hover:shadow-xl
              cursor-pointer
            "
          >
            خروج
          </motion.button>
        </motion.div>
      )}
    </div>
  )
}

export default NavLogin