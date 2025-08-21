"use client"

import { Itsxsvg } from "@/lib/types"
const BarSVG = ({
  fill = "currentColor",
  width = 24,
  height = 24,
  className = "",
  onClick = () => {},
}: Itsxsvg) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={fill} className={className} width={width} height={height} onClick={onClick} >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  )
}

export default BarSVG