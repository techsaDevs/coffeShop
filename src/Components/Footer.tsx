import React from 'react'
import LogoSVG from './SVGs/nav/mobile/LogoSVG'
import LogoTypeSVG from './SVGs/nav/mobile/LogoTypeSVG'
import { IHeaderMenuItemBase } from '@/lib/types'
import Link from 'next/link'
import LocationSVG from './SVGs/footer/LocationSVG'
import MessageSVG from './SVGs/footer/MessageSVG'
import PhoneSVG from './SVGs/home/contact/PhoneSVG'
import ShapeSVG from './SVGs/home/landing/ShapeSVG'
import FooterBtn from './Footer/FooterBtn'
import QuickAccess from './Footer/QuickAccess'
import TelegramSVG from './SVGs/footer/TelegramSVG'
import InstagramSVG from './SVGs/footer/InstagramSVG'

const Footer = () => {

  const quickAccessList: IHeaderMenuItemBase[] = [
    {
      id: "1",
      link: "/sss1",
      title: "حریم خصوصی"
    },
    {
      id: "2",
      link: "/sss2",
      title: "عودت کالا"
    },
    {
      id: "3",
      link: "/sss3",
      title: "شرایط استفاده"
    },
    {
      id: "4",
      link: "/ss4",
      title: "ثبت سفارش"
    },
    {
      id: "5",
      link: "/sss5",
      title: "پرسش های متداول"
    },
    {
      id: "6",
      link: "/ss6",
      title: "فرصت های شغلی"
    },
    {
      id: "7",
      link: "/ss7",
      title: "ضمانت نامه ها"
    },
    {
      id: "8",
      link: "/ss9",
      title: "ارتباط با ما"
    },
  ]

  return (
    <div className='bg-[#3f3f46] text-white w-full px-24 p hidden md:block relative'>

      <div className="hidden md:block">
        <ShapeSVG className='invisible md:visible absolutebCenter top-0 rotate-180 fill-body w-24-1 h-[22px]' width={100} height={22} />

        <FooterBtn />
      </div>

      <div className="flexBetween py-7 border-b border-gray-300/20">
        <div className="">
          <div className="flex items-center gap-4">
            <LogoSVG className='size-12' />
            <LogoTypeSVG className="w-28" />
            <img src="/footer/techsaDevTeam--dark.logo.png" alt="" className='footer-logo w-26' />
          </div>
          <p className="max-w-[425px] mt-3 leading-9" style={{ letterSpacing: 20 }}>
            ما برآنیم تا با پیشرو در فرآیند  تولید ، نوع کیفیت محصول، خدمات و
            توزیع، الگویی برای تولید کنندگان ایرانی باشیم و به مرجع فرهنگ در ایران
            تبدیل شویم. می پنداریم که نظر مردم ایران منطقه باید نسبت به کالای ایرانی
            بهبود یابد و در این راستا با اشتیاق  می کوشیم.
          </p>
        </div>

        <div className="">
          <h3 className="footer-title">دسترسی سریع</h3>
          <QuickAccess list={quickAccessList} />
        </div>
        <div className="">
          <h3 className="footer-title">در تماس باشیم</h3>
          <div className="">
            <div className="flex gap-3 pb-3.5">
              <LocationSVG />
              <p className="">بلوار میرداماد، خیابان البرز، کوچه قبادان شرقی ، پلاک 33</p>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex gap-3">
                <MessageSVG className='-mt-0.5 size-6' />
                <span className="">techsa.content@gmail.com</span>
              </div>
              <div className="flex gap-3">
                <PhoneSVG className='-mt-1 size-6' />
                <div className="flex gap-1.5">
                  <span className="">6628</span>
                  <span className="">123</span>
                  <span className="">0902</span>
                </div>
              </div>
              <span className="">6789012 - 021</span>
            </div>
            <div className="flex items-center gap-6 mt-6">
              <Link href="https://www.instagram.com/techsa.ir" className="flex items-center gap-3 py-2 px-10 duration-150 rounded-xl border border-orange-300 text-orange-300  hover:bg-orange-300 hover:text-white">
                <InstagramSVG className="size-8 shrink-0 -mt-1" />
                <p className="text-lg -mb-[2px]">techsa.ir @</p>
              </Link>
              <Link href="https://t.me/techsa_ir" className='flex items-center gap-3 py-2 px-10 duration-150 rounded-xl bg-gradient-to-r text-black hover:text-white from-orange-50 to-orange-300'>
                <TelegramSVG className="size-8 shrink-0 -mt-1" />
                <p className="text-lg -mb-[2px]">techsa_ir @</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flexBetween py-9">
        <div className="flex items-center gap-2 group">
          <div className='border border-orange-300/30 p-0.5 rounded-full' >
            <div className="border border-orange-300/30 p-0.5 rounded-full flex items-center justify-center">
              <div className='bg-orange-300 size-2 duration-200 group-hover:size-2.5 rounded-full' />
            </div>
          </div>
          <p className="">
            تمام حقوق این رابط کاربری متعلق به تیم <span className="cursor-none duration-150 group-hover:text-orange-300 group-hover:px-1">تکسا</span> میباشد
          </p>
        </div>
        <span className="capitalize font-sans">copyright © 2025 golden coffe. all rights reserved</span>
      </div>
    </div>
  )
}

export default Footer