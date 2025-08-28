"use client";
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { CartSVG } from "@/Components/SVGs";
import { useCartStore } from '@/stores/cartStore';
import { useAuthStore } from '@/stores/authStore';
import Link from 'next/link';
import BasketPrice from '../BasketPrice';
import { XMarkSVG } from "@/Components/SVGs";

const MobileCartLeft = () => {
    const [showCartMenu, setShowCartMenu] = useState(false);
    const { isLoggedin } = useAuthStore();
    const { productsInBasket, finalTotal, fetchProducts } = useCartStore();

    useEffect(() => {
        if (isLoggedin) fetchProducts();
    }, [fetchProducts, isLoggedin]);

    return (
        <>
            <button
                className='cursor-pointer px-4 py-5'
                onClick={() => setShowCartMenu(true)}
            >
                <CartSVG width={24} height={24} className='size-6 stroke-foreground' />
            </button>

            {/* Overlay */}
            {showCartMenu && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                    onClick={() => setShowCartMenu(false)}
                />
            )}

            <div
                className={`fixed top-0 left-0 z-50 bg-background text-foreground w-72 h-screen overflow-hidden transition-transform duration-300
                    ${showCartMenu ? "translate-x-0" : "-translate-x-72"}
                `}
            >
                {/* Header */}
                <div className="flexBetween">
                    <button
                        className="py-5 px-4 cursor-pointer"
                        onClick={() => setShowCartMenu(false)}
                    >
                        <XMarkSVG width={24} height={24} className='stroke-foreground' />
                    </button>
                    <span className="text-lg font-bold pl-4">سبد خرید</span>
                </div>

                <span className='block h-px bg-basketItem-border px-6 mx-4 mb-6' />

                {/* Cart Items */}
                <div className="p-4 pt-0 overflow-y-auto h-[calc(100vh-120px)] space-y-3">
                    {isLoggedin ? (
                        productsInBasket.length ? (
                            <ul className={`childs:border-b childs:border-b-basketItem-border childs:pb-5 childs:mb-5 pb-1`}>
                                {productsInBasket.map(({ id, title, image, price, off, qty }) => (
                                    <motion.li key={id} initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -5 }} transition={{ duration: 0.2, delay: 0.05 }} className='flex items-center gap-x-2.5'>
                                        <img className='size-[90px]' src={image} alt={title} />
                                        <div className="flex flex-col justify-start gap-y-4">
                                            <h4 className="font-dana-medium text-foreground text-sm line-clamp-2">{title} {qty ? (<>× {qty}</>) : ""}</h4>
                                            <div className="flex justify-end flex-row-reverse gap-4 mt-1">
                                                <BasketPrice price={price} off={off} />
                                            </div>
                                        </div>
                                    </motion.li>
                                ))}
                            </ul>
                        ) : (
                            <div className="flexColCenter py-20 gap-4">
                                <CartSVG className='size-16 stroke-foregray' />
                                <span className="text-foreground">سبد خرید شما خالی است</span>
                                <Link
                                    href="/product"
                                    className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
                                >
                                    مشاهده فروشگاه
                                </Link>
                            </div>
                        )
                    ) : (
                        <div className="flexColCenter py-20 gap-4">
                            <span className="text-gray-400">برای مشاهده سبد خرید ابتدا وارد شوید</span>
                            <Link
                                href="/login"
                                className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
                            >
                                ورود | ثبت‌نام
                            </Link>
                        </div>
                    )}
                </div>

                {/* Footer چسبیده به پایین */}
                {isLoggedin && productsInBasket.length > 0 && (
                    <div className="absolute bg-background bottom-0 left-0 right-0 p-4 shadow-lg shadow-foreground">
                        <div className="flexBetween">

                            <Link
                                href="/basket"
                                className="basketBtn text-base px-5 py-2.5"
                            >
                                ثبت سفارش
                            </Link>
                            <div className="flex flex-col justify-between mb-2 gap-0.5">
                                <span className="tracking-tighter font-dana-medium text-gray-300 text-xs">مبلغ قابل پرداخت:</span>
                                <div className="font-bold text-lg space-x-1">
                                    <span className="font-dana-dbold">{finalTotal.toLocaleString()}</span>
                                    <span className="font-dana text-xs">تومان</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default MobileCartLeft;