"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useCartStore } from "@/stores/cartStore";
import { useAuthStore } from "@/stores/authStore";
import BasketPrice from "@/Components/Header/BasketPrice";
import { MinusSVG, PlusSVG, CartSVG } from "@/Components/SVGs";
import Container from "@/Components/Container";

type IsortBy =
    "price-asc" | "price-desc" |
    "qty-asc" | "qty-desc" |
    "name-asc" | "name-desc" |
    "count-asc" | "count-desc" |
    "star-asc" | "star-desc";


const BasketPage = () => {
    const { isLoggedin } = useAuthStore();
    const { productsInBasket, finalTotal, fetchProducts, increaseQty, decreaseQty } = useCartStore();
    const [sortBy, setSortBy] = useState<IsortBy>("price-asc");

    const getAverageStars = (stars: number[]) => {
        if (!stars || stars.length === 0) return 0;
        return stars.reduce((sum, s) => sum + s, 0) / stars.length;
    };

    const sortedProducts = [...productsInBasket].sort((a, b) => {
        switch (sortBy) {
            case "price-asc": return a.price - b.price;
            case "price-desc": return b.price - a.price;
            case "count-asc": return a.count - b.count;
            case "count-desc": return b.count - a.count;
            case "star-asc": return getAverageStars(a.starCount) - getAverageStars(b.starCount);
            case "star-desc": return getAverageStars(b.starCount) - getAverageStars(a.starCount);
            case "qty-asc": return a.qty - b.qty;
            case "qty-desc": return b.qty - a.qty;
            case "name-asc": return a.title.localeCompare(b.title);
            case "name-desc": return b.title.localeCompare(a.title);
            default: return 0;
        }
    });

    useEffect(() => {
        if (isLoggedin) fetchProducts();
    }, [fetchProducts, isLoggedin]);

    if (!isLoggedin)
        return (
            <Container className="min-h-[58.5vh] py-20 flexCenter">
                <div className="md:mt-14 lg:mt-17 flex flex-col items-center gap-6">
                    <CartSVG className="size-16 stroke-foregray" />
                    <span className="text-gray-400 text-lg">برای مشاهده سبد خرید ابتدا وارد شوید</span>
                    <Link
                        href="/login"
                        className="basketBtn text-lg px-[27px] py-[13px]"
                    >
                        ورود | ثبت‌نام
                    </Link>
                </div>
            </Container>
        );

    if (!productsInBasket.length)
        return (
            <Container className="min-h-[58.5vh] flexCenter">
                <div className="md:mt-14 lg:mt-17 flex flex-col items-center gap-6">
                    <CartSVG className="size-16 stroke-foregray" />
                    <span className="text-gray-400 text-lg">سبد خرید شما خالی است</span>
                    <Link href="/products" className='basketBtn text-lg px-[27px] py-[13px]'>مشاهده صفحه فروشگاه</Link>
                </div>
            </Container>
        );

    return (
        <Container className="mt-8 md:mt-40 md:pb-5 lg:mt-48 lg:pb-10">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">سبد خرید</h1>
                {productsInBasket.length > 1 && (
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-gray-500 text-sm">مرتب‌سازی بر اساس:</span>
                        <select
                            className="border border-basket-border rounded px-2 py-1"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as IsortBy)}
                        >
                            <option value="price-asc">قیمت صعودی</option>
                            <option value="price-desc">قیمت نزولی</option>
                            <option value="qty-asc">تعداد صعودی</option>
                            <option value="qty-desc">تعداد نزولی</option>
                            <option value="name-asc">نام A → Z</option>
                            <option value="name-desc">نام Z → A</option>
                        </select>
                    </div>
                )}

            </div>

            <ul className="divide-y divide-basketItem-border mt-4">
                {sortedProducts.map(({ id, title, image, price, off, qty }) => (
                    <motion.li
                        key={id}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -5 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-4 py-4"
                    >
                        <img
                            src={image}
                            alt={title}
                            className="w-32 h-32 object-contain rounded shadow-[0_4px_10px_rgba(0,0,0,0.04)]"
                        />
                        <div className="flex flex-col justify-between flex-1">
                            <h4 className="text-base font-medium line-clamp-2">{title}</h4>

                            <div className="flex justify-between items-center mt-3">
                                {/* قیمت */}
                                <div className="flex flex-col">
                                    <BasketPrice price={price} off={off} />
                                    {off > 0 && (
                                        <span className="text-gray-400 text-xs line-through mt-0.5">
                                            {price.toLocaleString()} تومان
                                        </span>
                                    )}
                                </div>

                                {/* کنترل تعداد */}
                                <div className="flex items-center gap-2 bg-background rounded-full px-2 py-1">
                                    <button
                                        className="p-1 rounded-full hover:bg-foregray group transition-colors"
                                        onClick={() => decreaseQty(id)}
                                    >
                                        <MinusSVG className="w-5 h-5" />
                                    </button>
                                    <span className="px-3 py-1 text-sm font-medium text-orange-500">{qty}</span>
                                    <button
                                        className="p-1 rounded-full hover:bg-foregray group transition-colors"
                                        onClick={() => increaseQty(id)}
                                    >
                                        <PlusSVG className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.li>
                ))}
            </ul>

            <div className="flex justify-between items-center mt-6 p-4 border-t border-basket-border">
                <div>
                    <span className="text-xs text-gray-300">مبلغ قابل پرداخت</span>
                    <p className="text-lg font-bold">{finalTotal.toLocaleString()} تومان</p>
                </div>
                <Link href="/basket" className="basketBtn px-6 py-2">
                    ثبت سفارش
                </Link>
            </div>
        </Container>
    );
};

export default BasketPage;