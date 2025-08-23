"use client"
import React from 'react'
import ArrowDownSVG from '@/Components/SVGs/home/landing/ArrowDownSVG'

const LandingButton = () => {

    const handleClick = () => {
        console.log("landing button click")
    }

    return (
        <button onClick={handleClick} className="w-[30px] h-[30px] rounded-full border border-orange-300 flexCenter absolutebCenter translate-y-1/2 invisible md:visible cursor-pointer">
            <ArrowDownSVG className='w-5 h-5 stroke-foreground' width={20} height={20} />
        </button>
    )
}

export default LandingButton