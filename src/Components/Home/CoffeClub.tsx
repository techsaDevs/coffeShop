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
                icon: <ActivitySVG className='size-10 md:size-12 mx-auto' />
            },
            {
                title: "ماموریت ها",
                icon: <DiscoverySVG className='size-10 md:size-12 mx-auto' />
            },
            {
                title: "جایزه ها",
                icon: <TicketStarSVG className='size-10 md:size-12 mx-auto' />
            }
        ]

    return (
        <section className='mb-8 md:mb-20'>
            <Container>
                <div className="py-8 md:py-0 md:h-36 px-3 md:px-11 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-y-8 md:gap-y-0">
                    <div className="flex items-center gap-x-3 md:gap-x-6 text-white">
                        <img src="/club/diamond.png" alt="diamond" className='w-[87px] md:w-[110px]' />
                        <div>
                            <h4 className="font-morabba-bold text-2xl md:text-5xl">کافی کلاب</h4>
                            <p className="font-morabba text-lg md:text-2xl max-w-50 md:max-w-none">میدونستی میتونی با امتیاز هات قهوه بگیری ؟</p>
                        </div>
                    </div>
                    <div className="flex justify-between md:justify-start">
                        <div className="flex gap-x-2 md:gap-x-5 ml-6">
                            {
                                clubBox.map(({ title, icon }) => (
                                    <div key={title} className="size-[72px] md:size-[98px] text-center bg-white rounded-2xl py-1.5 md:pt-5 md:pb-1 text-emerald-600">
                                        {icon}
                                        <span className="text-xs md:text-sm inline-block mt-1 md:mt-1.5">{title}</span>
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