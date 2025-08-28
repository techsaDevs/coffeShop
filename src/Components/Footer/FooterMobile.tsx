import React from 'react'
import { LogoSVG } from "@/Components/SVGs";
import { LogoTypeSVG } from "@/Components/SVGs";
import { IHeaderMenuItemBase } from '@/lib/types'
import Link from 'next/link'
import { LocationSVG } from "@/Components/SVGs";
import { MessageSVG } from "@/Components/SVGs";
import { PhoneSVG } from "@/Components/SVGs";
import QuickAccess from '../Footer/QuickAccess'
import { TelegramSVG } from "@/Components/SVGs";
import { InstagramSVG } from "@/Components/SVGs";

interface FooterMobileProps {
    quickAccessList: IHeaderMenuItemBase[]
}

const FooterMobile = ({ quickAccessList }: FooterMobileProps) => {
    return (
        <div className="bg-[#3f3f46] text-white w-full px-5 py-8 md:hidden">
            {/* لوگو */}
            <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-8">
                    <LogoSVG className="w-12 h-12" />
                    <LogoTypeSVG className="w-28" />
                    <img src="/footer/techsaDevTeam--dark.logo.png" alt="" className="w-24 mt-2" />
                </div>
                <div className="">
                    <p className="text-sm mt-3 leading-6 text-center" style={{ letterSpacing: 20 }}>
                        ما برآنیم تا با پیشرو در فرآیند تولید ، نوع کیفیت محصول، خدمات و توزیع، الگویی برای تولید کنندگان ایرانی باشیم و به مرجع فرهنگ در ایران تبدیل شویم.
                    </p>
                </div>
            </div>

            {/* دسترسی سریع */}
            <div className="mt-6">
                <h3 className="footer-title mb-3">دسترسی سریع</h3>
                <QuickAccess list={quickAccessList} />
            </div>

            {/* تماس با ما */}
            <div className="mt-6">
                <h3 className="footer-title mb-3">در تماس باشیم</h3>
                <div className="flex flex-col gap-3 text-sm">
                    <div className="flex gap-2 items-start">
                        <LocationSVG />
                        <p>بلوار میرداماد، خیابان البرز، کوچه قبادان شرقی، پلاک 33</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center">
                            <MessageSVG className="w-6 h-6" />
                            <span>techsa.content@gmail.com</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <PhoneSVG className="w-6 h-6" />
                            <span>021-6789012 / 0902-123-6628</span>
                        </div>
                    </div>
                    <div className="flex gap-3 mt-4 justify-center">
                        <Link href="https://www.instagram.com/techsa.ir" className="flex items-center gap-2 px-4 py-2 border border-orange-300 rounded-xl text-orange-300 hover:bg-orange-300 hover:text-white">
                            <InstagramSVG className="w-6 h-6" />
                            <span className='-mb-1.5'>techsa.ir @</span>
                        </Link>
                        <Link href="https://t.me/techsa_ir" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-orange-50 to-orange-300 text-black hover:text-white">
                            <TelegramSVG className="w-6 h-6" />
                            <span className='-mb-1.5'>techsa_ir @</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="px-6 pt-6 mt-2 flex flex-col md:flex-row justify-between items-center gap-4">
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
        </div>
    )
}

export default FooterMobile
