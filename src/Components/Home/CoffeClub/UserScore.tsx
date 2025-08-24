"use client"
import ArrowLeftSVG from '@/Components/SVGs/nav/ArrowLeftSVG'
import { useAuthStore } from '@/stores/authStore'
import Link from 'next/link'
import React, { useState } from 'react'

const UserScore = () => {

    const { isLoggedin, user } = useAuthStore()

    return (
        <div className={`flex flex-col w-full md:mr-20 ${!isLoggedin ? "justify-center" : ""}`}>
            {
                isLoggedin ? (
                    <>
                        <span className='text-center'>هنوز لاگین نیستید</span>
                        <Link href="/login" className="rounded-2xl py-1.5 px-2 text-center bg-gradient-to-l to-orange-300 from-orange-500 mt-3 shadow hover:scale-110 duration-200">لاگین</Link>
                    </>
                ) : (
                    <>
                        <h4 className="text-2xl font-dana-medium md:text-4xl leading-6 md:leading-7">542</h4>
                        <span className='text-sm md:text-center'>امتیــــاز شما</span>
                        <Link href="/profile/coin" className="bg-gradient-to-l to-orange-100 from-orange-300 hover:from-30% shadow-lg hover:shadow-orange-300 duration-200 rounded-2xl py-1.5 px-2 md:mt-2 flexBetween max-w-28 md:max-w-none">
                            <span className="text-xs md:text-base">دریافت جاییزه</span>
                            <ArrowLeftSVG className='size-4 md:size-[18px]' />
                        </Link>
                    </>
                )
            }
        </div>
    )
}

export default UserScore;