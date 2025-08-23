"use client"
import React from 'react'
import StarSVG from '@/Components/SVGs/home/products/StarSVG'

interface IRenderStar {
  starCount: number[]
}

const RenderStar = ({ starCount }: IRenderStar) => {
  const avg = starCount.length
    ? starCount.reduce((a, b) => a + b, 0) / starCount.length
    : 0

  const fullStars = Math.floor(avg)
  let partialStar: 0 | 50 | 100 = 0

  // تصمیم‌گیری برای ستاره آخر
  const decimal = avg - fullStars
  if (decimal >= 0.7) partialStar = 100
  else if (decimal >= 0.3) partialStar = 50

  const stars = []
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) stars.push(<StarSVG key={i} percent={100} />)
    else if (i === fullStars) stars.push(<StarSVG key={i} percent={partialStar} />)
    else stars.push(<StarSVG key={i} percent={0} />)
  }

  // راست به چپ برای سایت RTL
  return <div className="flex flex-row-reverse">{stars}</div>
}

export default RenderStar