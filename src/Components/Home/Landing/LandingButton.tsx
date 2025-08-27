"use client"
import React from 'react'
import ArrowDownSVG from '@/Components/SVGs/home/landing/ArrowDownSVG'

const LandingButton = () => {

    const handleClick = () => {
        console.log("landing button click")
    }

    return (
        <button onClick={handleClick} className="arrowBtn bottom-0 translate-y-1/2">
            <ArrowDownSVG className='w-5 h-5 stroke-foreground' width={20} height={20} />
        </button>
    )
}

export default LandingButton