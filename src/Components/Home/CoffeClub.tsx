import React from 'react'
import Container from '../Container'
import { ActivitySVG } from "@/Components/SVGs";
import { DiscoverySVG } from "@/Components/SVGs";
import { TicketStarSVG } from "@/Components/SVGs";
import UserScore from './CoffeClub/UserScore'

const CoffeClub = () => {

    const clubBox: {
        title: string;
        icon: React.ReactNode
    }[] = [
            {
                title: "چرخ و بخت",
                icon: <ActivitySVG className='size-10 lg:size-12 mx-auto' />
            },
            {
                title: "ماموریت ها",
                icon: <DiscoverySVG className='size-10 lg:size-12 mx-auto' />
            },
            {
                title: "جایزه ها",
                icon: <TicketStarSVG className='size-10 lg:size-12 mx-auto' />
            }
        ]

    return (
        <section className='mb-8 lg:mb-20'>
            <Container>
                <div className={`py-8 lg:py-0 lg:h-36 px-3 lg:px-7 xl:px-11 bg-gradient-to-r
                 from-emerald-500 to-emerald-600 rounded-2xl flex flex-col 
                   lg:flex-row lg:items-center justify-between gap-y-8 lg:gap-y-0 lg:gap-x-2`}>
                    <div className="flex items-center gap-x-3 lg:gap-x-6 text-white">
                        <img src="/club/diamond.png" alt="diamond" className='w-[87px] lg:w-[110px]' />
                        <div>
                            <h4 className="font-morabba-bold text-2xl lg:text-4xl xl:text-5xl">کافی کلاب</h4>
                            <p className="font-morabba text-lg lg:text-2xl max-w-50 md:max-w-none">میدونستی میتونی با امتیاز هات قهوه بگیری ؟</p>
                        </div>
                    </div>
                    <div className="flex justify-between lg:justify-start">
                        <div className="flex gap-x-2 lg:gap-x-5 ml-6">
                            {
                                clubBox.map(({ title, icon }) => (
                                    <div key={title} className="size-[72px] lg:size-[98px] text-center bg-white rounded-2xl py-1.5 lg:pt-5 lg:pb-1 text-emerald-600">
                                        {icon}
                                        <span className="text-xs lg:text-sm inline-block mt-1 lg:mt-1.5">{title}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <UserScore />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default CoffeClub