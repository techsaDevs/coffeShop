import React, { ReactNode } from 'react'
import CoffeeSVG from './../SVGs/home/services/CoffeeSVG';
import ExpressDeliverySVG from '../SVGs/home/services/ExpressDeliverySVG';
import PitcherSVG from '../SVGs/home/services/PitcherSVG';
import SupportSVG from '../SVGs/home/services/SupportSVG';
import SupportDarkSVG from '../SVGs/home/services/SupportDarkSVG';
import ExpressDeliveryDarkSVG from '../SVGs/home/services/ExpressDeliveryDarkSVG';
import CoffeeDarkSVG from '../SVGs/home/services/CoffeeDarkSVG';
import PitcherDarkSVG from '../SVGs/home/services/PitcherDarkSVG';
import Container from '../Container';

const Services = () => {

      const services : {
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
            icon: <ExpressDeliverySVG className='service-icon' />,
            iconDark: <ExpressDeliveryDarkSVG className="service-icon-dark" />
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
    <div id='services' className='my-8 md:my-24'>
      <Container>
        <ul className="flexBetween">
            {
                services.map(({title , caption , icon , iconDark}) => (
                <li className="flex items-center gap-5" key={title}>
                    <div className="">
                        {icon}
                        {iconDark}
                    </div>
                    <div className="">
                        <h3 className="text-xl mb-3">{title}</h3>
                        <p className="text-sm">{caption}</p>
                    </div>
                </li>
                ))
            }
        </ul>
      </Container>
    </div>
  )
}

export default Services;