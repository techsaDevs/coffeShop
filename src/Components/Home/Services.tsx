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
    <div id='services' className='my-18 md:my-24'>
      <Container>
        <ul className="flexBetween flex-wrap gap-12">
            {
                services.map(({title , caption , icon , iconDark}) => (
                <li className="flex flex-col md:flex-row items-center gap-3" key={title}>
                    <div className="">
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
    </div>
  )
}

export default Services;