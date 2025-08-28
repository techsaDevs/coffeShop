"use client"
import { IHeaderMenuItemBase } from '@/lib/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface QuickAccessProps {
    list: IHeaderMenuItemBase[]
}

const QuickAccess = ({ list }: QuickAccessProps) => {
    const path = usePathname()

    return (
        <ul className="flex flex-col gap-3 flex-wrap w-[22rem] max-h-36">
            {
                list.map(({ id, link, title }: IHeaderMenuItemBase) => (
                    <li className="space-x-2.5 duration-150 hover:text-orange-300 group" key={id}>
                        <span className={`w-2 h-1 inline-block rounded-xl duration-100 ${path === link ? "bg-orange-300" : "group-hover:bg-current bg-white"}`} />
                        <Link href={link} className={`${path === link ? "text-orange-300" : "hover:text-orange-300"}`}>{title}</Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default QuickAccess;