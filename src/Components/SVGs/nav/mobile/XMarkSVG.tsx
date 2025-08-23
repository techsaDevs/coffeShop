import { Itsxsvg } from '@/lib/types'
import React from 'react'

const XMarkSVG = ({
    fill = "currentColor",
    width = "",
    height = "",
    className = "w-6 h-6",
    onClick = () => { },
}: Itsxsvg) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' strokeWidth={1.5} width={width} height={height} stroke={fill} className={className} onClick={onClick}>
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
        </svg>
    )
}

export default XMarkSVG