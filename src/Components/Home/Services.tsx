import React, { ReactNode } from 'react'
import { CoffeeSVG } from "@/Components/SVGs";
import { ExpressDeliverySVG } from "@/Components/SVGs";
import { PitcherSVG } from "@/Components/SVGs";
import { SupportSVG } from "@/Components/SVGs";
import { SupportDarkSVG } from "@/Components/SVGs";
import { ExpressDeliveryDarkSVG } from "@/Components/SVGs";
import { CoffeeDarkSVG } from "@/Components/SVGs";
import { PitcherDarkSVG } from "@/Components/SVGs";
import Container from '../Container';

const Services = () => {

    const services: {
        icon: ReactNode;
        iconDark: ReactNode;
        title: string;
        caption: string;
    }[] = [
            {
                title: "پشتیبانی شبانه روزی",
                caption: "7 روز هفته ، 24 ساعته",
                icon: <SupportSVG className='service-icon' />,
                iconDark: <SupportDarkSVG className="service-icon-dark" />
            },
            {
                title: "امکان تحویل اکسپرس",
                caption: "ارسال بسته ببا سرعت زیاد",
                icon: <ExpressDeliverySVG className='service-icon -ml-10 md:ml-0' />,
                iconDark: <ExpressDeliveryDarkSVG className="service-icon-dark -ml-10 md:ml-0" />
            },
            {
                title: "رست تخصصی",
                caption: "تازه رشته شده و با کیفیت",
                icon: <CoffeeSVG className='service-icon' />,
                iconDark: <CoffeeDarkSVG className="service-icon-dark" />
            },
            {
                title: "اکسسوری قهوه",
                caption: "وسایل و ادوات دم آوری",
                icon: <PitcherSVG className='service-icon' />,
                iconDark: <PitcherDarkSVG className="service-icon-dark" />
            }
        ]

    return (
        <section id='services' className='my-18 md:my-24'>
            <Container>
                <ul className="flexBetween flex-wrap gap-12">
                    {
                        services.map(({ title, caption, icon, iconDark }) => (
                            <li className="flex flex-col md:flex-row items-center gap-3" key={title}>
                                <div >
                                    {icon}
                                    {iconDark}
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl mb-3">{title}</h3>
                                    <p className="text-sm">{caption}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </Container>
        </section>
    )
}

export default Services;