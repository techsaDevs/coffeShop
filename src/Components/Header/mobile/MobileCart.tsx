import CartSVG from '@/Components/SVGs/nav/CartSVG'
import React from 'react'

const MobileCart = () => {
  return (
    <>
        <button className='cursor-pointer'> <CartSVG width={24} height={24} className='size-6 stroke-foreground' /> </button> 
    </>
  )
}

export default MobileCart