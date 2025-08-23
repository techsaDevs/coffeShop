"use client"
import { Itsxsvg } from '@/lib/types'
import React, { useId } from 'react'

interface StarProps extends Itsxsvg {
  percent?: number // 0, 50, 100
}

const StarSVG = ({
  width = 24,
  height = 24,
  className = "",
  onClick = () => {},
  percent = 100,
}: StarProps) => {
  const gradientId = useId() // id پایدار برای SSR + Client

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
      onClick={onClick}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset={`${percent}%`} stopColor="gold" />
          <stop offset={`${percent}%`} stopColor="lightgray" />
        </linearGradient>
      </defs>
      <path
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
      />
    </svg>
  )
}

export default StarSVG
