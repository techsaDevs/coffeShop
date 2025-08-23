import { Itsxsvg } from '@/lib/types'
import React from 'react'

const ArrowDownSVG = ({
  fill = "currentColor",
  width = 20,
  height = 20,
  className = "",
  onClick = () => {},
}: Itsxsvg) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={fill} width={width} height={height} className={className} onClick={onClick}>
            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>
    )
}

export default ArrowDownSVG