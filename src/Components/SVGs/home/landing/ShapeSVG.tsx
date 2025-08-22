"use client"
import { Itsxsvg } from '@/lib/types'
import React from 'react'

const ShapeSVG = ({
  fill = "currentColor",
  width = 100,
  height = 22,
  className = "",
  onClick = () => {},
}: Itsxsvg) => {
  return (
    <svg viewBox='0 0 100 22' fill={fill} xmlns='http://www.w3.org/2000/svg' width={width} height={height} className={className} onClick={onClick}>
        <path d='M50 0C69 0 81 22 100 22L0 22C18.75 22 31 0 50 0Z' />
    </svg>
  )
}

export default ShapeSVG