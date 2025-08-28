"use client"
import React from 'react'
import { ArrowDownSVG } from "@/Components/SVGs";

const FooterBtn = () => {
  return (
    <button className='arrowBtn top-0 rotate-180 -translate-y-4'>
      <ArrowDownSVG className='w-5 h-5 stroke-foreground' width={20} height={20} />
    </button>
  )
}

export default FooterBtn