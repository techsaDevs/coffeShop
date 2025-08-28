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
import FooterMobile from './Footer/FooterMobile'

const Footer = () => {
  const quickAccessList: IHeaderMenuItemBase[] = [
    { id: "1", link: "/sss1", title: "حریم خصوصی" },
    { id: "2", link: "/sss2", title: "عودت کالا" },
    { id: "3", link: "/sss3", title: "شرایط استفاده" },
    { id: "4", link: "/ss4", title: "ثبت سفارش" },
    { id: "5", link: "/sss5", title: "پرسش های متداول" },
    { id: "6", link: "/ss6", title: "فرصت های شغلی" },
    { id: "7", link: "/ss7", title: "ضمانت نامه ها" },
    { id: "8", link: "/ss9", title: "ارتباط با ما" },
  ]

  return (
    <>
      <footer className="hidden md:block bg-[#3f3f46] text-white w-full relative">

        {/* بالای فوتر */}
        <div className="hidden md:block">
          <ShapeSVG className='absolute left-1/2 -translate-x-1/2 top-0 rotate-180 fill-body w-[100px] h-[22px]' />
          <FooterBtn />
        </div>

        {/* محتوای اصلی */}
        <div className="px-6 md:px-12 lg:px-24 py-10 border-b border-gray-300/20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* لوگو و توضیحات */}
            <div>
              <div className="flex items-center gap-4">
                <LogoSVG className='size-12' />
                <LogoTypeSVG className="w-28" />
                <img src="/footer/techsaDevTeam--dark.logo.png" alt="" className='footer-logo w-20 lg:w-26' />
              </div>
              <p className="mt-4 leading-7 text-sm lg:text-base max-w-full lg:max-w-[425px]" style={{ letterSpacing: 1 }}>
                ما برآنیم تا با پیشرو در فرآیند تولید، نوع کیفیت محصول، خدمات و توزیع،
                الگویی برای تولید کنندگان ایرانی باشیم و به مرجع فرهنگ در ایران تبدیل شویم.
              </p>
            </div>

            {/* دسترسی سریع */}
            <div>
              <h3 className="footer-title mb-4">دسترسی سریع</h3>
              <QuickAccess list={quickAccessList} />
            </div>

            {/* ارتباط */}
            <div>
              <h3 className="footer-title mb-4">در تماس باشیم</h3>
              <div className="space-y-4 text-sm lg:text-base">
                <div className="flex gap-3">
                  <LocationSVG />
                  <p>بلوار میرداماد، خیابان البرز، کوچه قبادان شرقی ، پلاک 33</p>
                </div>
                <div className="space-y-2">
                  <div className="flex gap-3">
                    <MessageSVG className='size-5 lg:size-6' />
                    <span>techsa.content@gmail.com</span>
                  </div>
                  <div className="flex gap-3">
                    <PhoneSVG className='size-5 lg:size-6' />
                    <span>0902 123 6628</span>
                  </div>
                  <span>021 - 6789012</span>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
                  <Link href="https://www.instagram.com/techsa.ir"
                    className="flex items-center gap-3 py-2 px-6 rounded-xl duration-150 border border-orange-300 text-orange-300 hover:bg-orange-300 hover:text-white">
                    <InstagramSVG className="size-6 lg:size-8" />
                    <p className='-mb-1'>techsa.ir @</p>
                  </Link>
                  <Link href="https://t.me/techsa_ir"
                    className='flex items-center gap-3 py-2 px-6 rounded-xl duration-150 bg-gradient-to-r from-orange-50 to-orange-300 text-black hover:text-white'>
                    <TelegramSVG className="size-6 lg:size-8" />
                    <p className='-mb-1'>techsa_ir @</p>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* پایین فوتر */}
        <div className="px-6 md:px-12 lg:px-24 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 group text-sm lg:text-base">
            <div className='border border-orange-300/30 p-0.5 rounded-full' >
              <div className="border border-orange-300/30 p-0.5 rounded-full flex items-center justify-center">
                <div className='bg-orange-300 size-2 group-hover:size-2.5 rounded-full transition-all' />
              </div>
            </div>
            <p>
              تمام حقوق این رابط کاربری متعلق به تیم <span className="group-hover:text-orange-300 transition">تکسا</span> میباشد
            </p>
          </div>
          <span className="capitalize font-sans text-xs lg:text-sm">copyright © 2025 golden coffe. all rights reserved</span>
        </div>
      </footer>
      <FooterMobile quickAccessList={quickAccessList} />
    </>
  )
}

export default Footer
