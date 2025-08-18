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
    <div className="flex gap-x-7">
      {/* basket & theme toggle */}
      <div className="flex items-center gap-x-5">
        {/* basket logo */}
        <div className="flex ">{
          isLogin ?
            (
              <div onClick={() => setOpenMiniBasket(!openMiniBasket)} className="cursor-pointer">
                <ShoppingCartSVG className='stroke-orange-200' />
              </div>
            ) : (<Link href={"/login"}> <ShoppingCartSVG className='stroke-orange-200' /> </Link>)
        }</div>
        {/* theme toggle */}
        <ThemeToggleButton/>
      </div>
      {/* login link */}
      {
        isLogin ? (
          <Link href={"/login"} className="flex select-none px-4 py-3 rounded-3xl text-orange-200 hover:bg-orange-200/10 gap-3 duration-150">
            <ArrowLeftEndOnRectangleSVG className='rotate-180' />
            <span className=''>
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