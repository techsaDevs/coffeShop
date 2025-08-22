"use client";
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import CartSVG from '@/Components/SVGs/nav/CartSVG';
import { useCartStore } from '@/stores/cartStore';
import { useAuthStore } from '@/stores/authStore';
import Link from 'next/link';
import BasketPrice from '../BasketPrice';
import XMarkSVG from '@/Components/SVGs/nav/mobile/XMarkSVG';

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

            {/* Mobile Cart Panel از سمت چپ */}
            <div
                className={`fixed top-0 left-0 z-50 bg-background text-foreground w-72 h-screen overflow-hidden transition-transform duration-300
                    ${showCartMenu ? "translate-x-0" : "-translate-x-72"}
                `}
            >
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b" style={{ borderColor: 'var(--color-basket-border)' }}>
                    <span className="text-lg font-bold">سبد خرید</span>
                    <button
                        className="p-2"
                        onClick={() => setShowCartMenu(false)}
                    >
                        <XMarkSVG width={24} height={24} className='stroke-foreground' />
                    </button>
                </div>

                {/* Cart Items */}
                <div className="p-4 overflow-y-auto h-[calc(100vh-120px)] space-y-3">
                    {isLoggedin ? (
                        productsInBasket.length ? (
                            <ul className="divide-y" style={{ borderColor: 'var(--color-basketItem-border)' }}>
                                {productsInBasket.map(({ id, title, image, price, off }) => (
                                    <motion.li
                                        key={id}
                                        initial={{ opacity: 0, x: -5 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -5 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex items-start gap-3 py-3 border-b"
                                        style={{ borderColor: 'var(--color-basketItem-border)' }}
                                    >
                                        <img src={image} alt={title} className="w-20 h-20 object-cover rounded" />
                                        <div className="flex flex-col justify-between flex-1">
                                            <h4 className="text-sm font-medium text-foreground line-clamp-2">{title}</h4>

                                            {/* جایگزین باکس Qty با نمایش قیمت مثل کامپوننت کارت */}
                                            <div className="flex items-end gap-4 mt-1">
                                                <div className="flex items-baseline gap-2">
                                                    <BasketPrice price={price} off={off} />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.li>
                                ))}
                            </ul>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-20 gap-4">
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
                        <div className="flex flex-col items-center justify-center py-20 gap-4">
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
                    <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-background" style={{ borderColor: 'var(--color-basket-border)' }}>
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-gray-300">مبلغ قابل پرداخت:</span>
                            <span className="font-bold text-lg">{finalTotal.toLocaleString()} تومان</span>
                        </div>
                        <Link
                            href="/basket"
                            className="block w-full text-center bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors"
                        >
                            ثبت سفارش
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
};

export default MobileCartLeft;