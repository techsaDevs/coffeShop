import { IBlog } from '@/lib/types'
import Link from 'next/link'
import React from 'react'
import LogoTypeSVG from '@/Components/SVGs/nav/mobile/LogoTypeSVG'
import ArrowLeftSVG from '@/Components/SVGs/nav/ArrowLeftSVG'

const BlogBox = ({ title, image, link, date: { day, month, year } }: IBlog) => {

  return (
    <Link href={link} className='bg-background rounded-2xl group flex flex-row md:flex-col gap-3 md:gap-0'>
      <div
        className={`overflow-hidden p-2.5 group relative
    before:content-[""] before:absolute before:z-10
    before:inset-[9.5px] before:rounded-2xl before:duration-200
    before:rounded-bl-4xl group-hover:before:bg-orange-300/70 before:delay-75
    w-3/5 h-full md:w-auto md:h-auto
  `}
      >
        <img
          src={image}
          alt={title}
          className='rounded-2xl rounded-bl-4xl w-full h-full object-cover md:w-auto md:h-auto'
        />
        <LogoTypeSVG
          className="
      absolute inset-0
      opacity-0 scale-50 md:scale-90
      group-hover:opacity-100 group-hover:scale-100
      transition-all duration-300 ease-in-out
      m-auto text-brown-900 z-20 delay-75
    "
          fill="#75340d"
        />
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-5 md:pr-4 pl-3 md:pt-0 md:pb-3 md:pl-6 gap-2">
        <h3 className="font-dana-medium max-w-42 line-clamp-2">{title}</h3>
        <div className="flex md:block justify-between items-center gap-24">
          <div className="flex flex-row md:flex-col items-center gap-x-1.5 text-emerald-400 mt-3">
            <h4 className="text-lg font-dana-dbold leading-5">{day}</h4>
            <span className="text-xs leading-5 font-dana-medium">{month}</span>
            <span className="text-xs">{year}</span>
          </div>
          <div className="
            md:hidden
            flex items-center justify-between
            bg-orange-300/15 py-2 px-3 rounded-full text-orange-300
            gap-2 cursor-pointer hover:scale-105 duration-200
          ">
            <span className="text-sm">مشاهده </span>
            <ArrowLeftSVG className='-mt-0.5' width={14} height={14} />
          </div>

        </div>
      </div>
    </Link>
  )
}

export default BlogBox