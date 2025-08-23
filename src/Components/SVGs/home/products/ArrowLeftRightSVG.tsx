"use client"
import React from 'react'
import { Itsxsvg } from '@/lib/types'

const ArrowLeftRightSVG = ({
  fill = "currentColor",
  width = 24,
  height = 24,
  className = "",
  onClick = () => {},
}: Itsxsvg) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={fill} className={className} width={width} height={height} onClick={onClick}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
    )
}

export default ArrowLeftRightSVG