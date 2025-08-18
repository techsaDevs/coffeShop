"use client"
import React, { useState } from 'react';
import ThemeToggleButton from './ThemeToggleButton';
import ArrowLeftEndOnRectangleSVG from '../SVGs/nav/ArrowLeftEndOnRectangleSVG';
import Link from 'next/link';
import UserSVG from '../SVGs/nav/UserSVG';
import ShoppingCartSVG from '../SVGs/nav/ShoppingCartSVG';

const Cartlogin = () => {
  const [openMiniBasket, setOpenMiniBasket] = useState<boolean>(false)
  const [isLogin, setIslogin] = useState<boolean>(true)
  const [user, setUser] = useState({ username: "techsa team" })

  return (
    <div className="flex text-orange-200">
      {/* basket & theme toggle */}
      <div className="flex items-center gap-x-5 ml-10">
        {/* basket logo */}
        <div className="flex ">{
          isLogin ?
            (
              <div onClick={() => setOpenMiniBasket(!openMiniBasket)} className="cursor-pointer">
                <ShoppingCartSVG />
              </div>
            ) : (<Link href={"/login"}> <ShoppingCartSVG /> </Link>)
        }</div>
        {/* theme toggle */}
        <ThemeToggleButton/>
      </div>
      {/* divided border */}
        <span className="w-px h-14 block bg-white/20"/>
      {/* login link */}
      {
        isLogin ? (
          <Link href={"/login"} className="flex items-center px-4 py-3 rounded-3xl hover:bg-orange-200/10 gap-3 duration-150 mr-6">
            <ArrowLeftEndOnRectangleSVG className='rotate-180' />
            <span className='text-xl select-none tracking-tightest'>
            ورود | ثبت نام
            </span>
          </Link>
        ) : (
          <Link href={"/basket"} className="flex select-none gap-3">
            <UserSVG />
            <span className=''>
            {user.username}
            </span>
          </Link>
        )
      }
    </div>
  );
};

export default Cartlogin;