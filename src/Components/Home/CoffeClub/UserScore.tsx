"use client"
import { ArrowLeftSVG } from "@/Components/SVGs";
import { useAuthStore } from '@/stores/authStore'
import Link from 'next/link'
import React from 'react'

const UserScore = () => {

    const { isLoggedin, user } = useAuthStore()

    return (
        <div className={`flex flex-col w-full text-white lg:mr-14 xl:mr-20 ${!isLoggedin ? "justify-center" : ""}`}>
            {
                !isLoggedin ? (
                    <>
                        <span className='text-center'>هنوز لاگین نیستید</span>
                        <Link href="/login" className="rounded-2xl py-1.5 px-2 text-center bg-gradient-to-l to-orange-300 from-orange-500 mt-3 shadow hover:scale-110 duration-200">لاگین</Link>
                    </>
                ) : (
                    <>
                        <h4 className="text-2xl font-dana-medium lg:text-4xl leading-6 lg:leading-7">542</h4>
                        <span className='text-sm lg:text-center'>امتیــــاز شما</span>
                        <Link href="/profile/coin" className={`
                        bg-gradient-to-l to-orange-100 from-orange-300 hover:from-30% 
                        shadow-lg hover:shadow-orange-300 duration-200 rounded-2xl
                        py-1.5 px-2 lg:mt-2 flexBetween`}>
                            <span className="text-xs md:text-base">دریافت جاییزه</span>
                            <ArrowLeftSVG className='size-4 lg:size-[18px]' />
                        </Link>
                    </>
                )
            }
        </div>
    )
}

export default UserScore;