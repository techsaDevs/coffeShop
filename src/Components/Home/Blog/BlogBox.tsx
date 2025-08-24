import { IBlog } from '@/lib/types'
import Link from 'next/link'
import React from 'react'
import LogoTypeSVG from '@/Components/SVGs/nav/mobile/LogoTypeSVG'

const BlogBox = ({title, image, link, date: {day, month, year}} : IBlog) => {

  return (
    <Link href={link} className='bg-background rounded-2xl group'>
        <div 
        className={`overflow-hidden p-2.5 group relative
        before:content-[""] before:absolute before:z-10
        before:inset-2 before:rounded-2xl  before:duration-200
        before:rounded-bl-4xl group-hover:before:bg-orange-300/70
        `}>
            <img src={image} alt={title} className='rounded-2xl rounded-bl-4xl ' />
            <LogoTypeSVG className="invisible group-hover:visible absolute inset-0 transition-all  m-auto text-brown-900 z-20" fill='#75340d' />
        </div>
        <div className="flexBetween pr-3 pb-3 pl-6">
            <h3 className="font-dana-medium max-w-42">{title}</h3>
            <div className="flex flex-col items-center text-emerald-400 mt-3">
                <h4 className="text-lg font-dana-dbold leading-5">{day}</h4>
                <span className="text-xs leading-5 font-dana-medium">{month}</span>
                <span className="text-xs">{year}</span>
            </div>
        </div>
    </Link>
  )
}

export default BlogBox