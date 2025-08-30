"use client"
import React from 'react'
import { ArrowDownSVG } from "@/Components/SVGs";
import { ShapeSVG } from "@/Components/SVGs";
import { usePathname } from 'next/navigation';

const FooterBtn = () => {

  const path = usePathname()

  return (
    <>
      {
        path === "/" ? (
          <div className="hidden md:block">
            <ShapeSVG className='absolute left-1/2 -translate-x-1/2 top-0 rotate-180 fill-body w-[100px] h-[22px]' />
            <button className='arrowBtn top-0 rotate-180 -translate-y-4'>
              <ArrowDownSVG className='w-5 h-5 stroke-foreground' width={20} height={20} />
            </button>
          </div>
        ) : null
      }
    </>
  )
}

export default FooterBtn