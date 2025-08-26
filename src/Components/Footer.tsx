import React from 'react'
import LogoSVG from './SVGs/nav/mobile/LogoSVG'
import LogoTypeSVG from './SVGs/nav/mobile/LogoTypeSVG'
import { IHeaderMenuItemBase } from '@/lib/types'
import Link from 'next/link'
import LocationSVG from './SVGs/footer/LocationSVG'
import MessageSVG from './SVGs/footer/MessageSVG'
import PhoneSVG from './SVGs/home/contact/PhoneSVG'

const Footer = () => {

  const quickAccess: IHeaderMenuItemBase[] = [
    {
      id: "1",
      link: "/",
      title: "حریم خصوصی"
    },
    {
      id: "2",
      link: "/",
      title: "عودت کالا"
    },
    {
      id: "3",
      link: "/",
      title: "شرایط استفاده"
    },
    {
      id: "4",
      link: "/",
      title: "ثبت سفارش"
    },
    {
      id: "5",
      link: "/",
      title: "پرسش های متداول"
    },
    {
      id: "6",
      link: "/",
      title: "فرصت های شغلی"
    },
    {
      id: "7",
      link: "/",
      title: "ضمانت نامه ها"
    },
    {
      id: "8",
      link: "/",
      title: "ارتباط با ما"
    },
  ]

  return (
    <div className='bg-[#3f3f46] text-white w-full px-24 h-96 hidden md:block'>

      <div className="">

      </div>

      <div className="flexBetween">
        <div className="">
          <div className="flex items-center gap-4">
            <LogoSVG className='size-12' />
            <LogoTypeSVG className="w-28" />
            <img src="/footer/techsaDevTeam--dark.logo.png" alt="" className='footer-logo w-26' />
          </div>
          <p className="max-w-[360px]">
            ما برآنیم تا با پیشرو در فرآیند  تولید ، نوع کیفیت محصول، خدمات و
            توزیع، الگویی برای تولید کنندگان ایرانی باشیم و به مرجع فرهنگ در ایران
            تبدیل شویم. می پنداریم که نظر مردم ایران منطقه باید نسبت به کالای ایرانی
            بهبود یابد و در این راستا با اشتیاق  می کوشیم.
          </p>
        </div>



        <div className="">
          <h3 className="footer-title">دسترسی سریع</h3>
          <ul className="">
            {
              quickAccess.map(({ id, link, title }) => (
                <li className="" key={id}>
                  <Link href={link}>{title}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="">
          <h3 className="footer-title">در تماس باشیم</h3>
            <div className="">
              <div className="">
                <LocationSVG />
                <p className="">بلوار میرداماد، خیابان البرز، کوچه قبادان شرقی ، پلاک 33</p>
              </div>
              <div className="">
                <div className="">
                <MessageSVG />
                <span className="">techsa.content@gmail.com</span>
                </div>
                <div className="">
                  <PhoneSVG />
                  <div className="">
                    <span className="">0902</span>
                    <span className="">123</span>
                    <span className="">6628</span>
                  </div>
                </div>
                <span className="">021 - 6789012</span>
              </div>
              <div className="">
                <Link href="https://www.instagram.com/techsa.ir" className="">@techsa.ir</Link>
                <Link href="https://t.me/techsa_ir" className=''>@techsa_ir</Link>
              </div>
            </div>
        </div>
      </div>

      <div className="flexBetween py-9">
        <div className="">
          <div className='' >
            <div className="">
              <div className='' />
            </div>
          </div>
          <p className="">
          تمام حقوق این رابط کاربری متعلق به تیم <span className="">تکسا</span> میباشد
          </p>
          </div>
        <span className="capitalize font-sans">copyright © 2025 golden coffe. all rights reserved</span>
      </div>
    </div>
  )
}

export default Footer