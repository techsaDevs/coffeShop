import BarSVG from '@/Components/SVGs/nav/BarSVG'
import React from 'react'

const BurgerMenu = () => {
    return (
        <>
            <button className="cursor-pointer"><BarSVG className='stroke-foreground' /></button>
        </>
    )
}

export default BurgerMenu