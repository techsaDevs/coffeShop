"use client"
import ArrowLeftSVG from '@/Components/SVGs/nav/ArrowLeftSVG'
import { useAuthStore } from '@/stores/authStore'
import Link from 'next/link'
import React, { useState } from 'react'

const UserScore = () => {

    const { isLoggedin, user } = useAuthStore()

    return (
        <div className="flex flex-col md:mr-20">
            {
                isLoggedin ? (
                    <>
                        <span className='text-center'>هنوز لاگین نیستید</span>
                        <Link href="/login" className="rounded-2xl py-1.5 px-2">لاگین</Link>
                    </>
                ) : (
                    <>
                        <h4 className="text-4xl">542</h4>
                        <span className='text-center'>امتیــــاز شما</span>
                        <Link href="/profile/coin" className="bg-gradient-to-l to-orange-100 from-orange-300 rounded-2xl py-1.5 px-2 flexBetween mt-2">
                            <span className="">دریافت جاییزه</span>
                            <ArrowLeftSVG width={18} height={18} />
                        </Link>
                    </>
                )
            }
        </div>
    )
}

export default UserScore;