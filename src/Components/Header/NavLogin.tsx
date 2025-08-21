"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import ArrowLeftEndOnRectangleSVG from '../SVGs/nav/ArrowLeftEndOnRectangleSVG'
import UserSVG from '../SVGs/nav/UserSVG'

const NavLogin = () => {
    const [isLoggedin, setIsLoggedin] = useState<boolean>(true)
    const [user, setUser] = useState({
        username: "techsa team",
    })

    return (
        <>
            {!isLoggedin ? (
                <Link href={"/login"} className="flex items-center px-4 py-3 rounded-full hover:bg-orange-200/10 gap-3 duration-150 mr-6">
                    <ArrowLeftEndOnRectangleSVG className='rotate-180' />
                    <span className='text-xl select-none tracking-tightest'>
                        ورود | ثبت نام
                    </span>
                </Link>
            ) : (
                <Link href={"/profile"} className="flex items-center px-4 py-3 rounded-full hover:bg-orange-200/10 duration-150 mr-6 select-none gap-3">
                    <UserSVG />
                    <span className=''>
                        {user.username}
                    </span>
                </Link>
            )}
        </>
    )
}

export default NavLogin;