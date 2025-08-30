"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useCartStore } from "@/stores/cartStore";
import { useAuthStore } from "@/stores/authStore";
import BasketPrice from "@/Components/Header/BasketPrice";
import { MinusSVG, PlusSVG, ArrowLeftSVG, CartSVG } from "@/Components/SVGs";
import { Container } from "lucide-react";

const BasketPage = () => {
    const { isLoggedin } = useAuthStore();
    const {
        productsInBasket,
        finalTotal,
        fetchProducts,
        increaseQty,
        decreaseQty,
    } = useCartStore();

    const [mode, setMode] = useState<"Initial price" | "qty">("qty");

    useEffect(() => {
        if (isLoggedin) fetchProducts();
    }, [fetchProducts, isLoggedin]);

    if (!isLoggedin)
        return (
            <Container className="py-20 flexColCenter gap-6">
                <CartSVG className="size-16 stroke-foregray" />
                <span className="text-gray-400 text-lg">برای مشاهده سبد خرید ابتدا وارد شوید</span>
                <Link
                    href="/login"
                    className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
                >
                    ورود | ثبت‌نام
                </Link>
            </Container>
        );

    if (!productsInBasket.length)
        return (
            <Container className="py-20 flexColCenter gap-6">
                <CartSVG className="size-16 stroke-foregray" />
                <span className="text-gray-400 text-lg">سبد خرید شما خالی است</span>
                <Link
                    href="/products"
                    className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
                >
                    مشاهده فروشگاه
                </Link>
            </Container>
        );

    return (
        <Container className="py-10">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">سبد خرید</h1>
                <div className="flex gap-3">
                    <button
                        className={`px-3 py-1 rounded ${mode === "qty" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-800"
                            }`}
                        onClick={() => setMode("qty")}
                    >
                        تعداد
                    </button>
                    <button
                        className={`px-3 py-1 rounded ${mode === "Initial price" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-800"
                            }`}
                        onClick={() => setMode("Initial price")}
                    >
                        قیمت
                    </button>
                </div>
            </div>

            <ul className="divide-y divide-basketItem-border">
                {productsInBasket.map(({ id, title, image, price, off, qty }) => (
                    <motion.li
                        key={id}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -5 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-4 py-4"
                    >
                        <img src={image} alt={title} className="w-24 h-24 object-cover" />
                        <div className="flex flex-col justify-between flex-1">
                            <h4 className="text-base font-medium line-clamp-2">{title}</h4>

                            {mode === "qty" ? (
                                <div className="flex items-center justify-between mt-2">
                                    <BasketPrice price={price} off={off} />
                                    <div className="flex items-center border border-basketItem-border rounded-full overflow-hidden">
                                        <button
                                            className="px-2 py-1 text-orange-500 hover:bg-basket-border"
                                            onClick={() => decreaseQty(id)}
                                        >
                                            <MinusSVG className="w-4 h-4 stroke-current" />
                                        </button>
                                        <span className="px-3 py-1 border-x border-basketItem-border text-orange-500">
                                            {qty}
                                        </span>
                                        <button
                                            className="px-2 py-1 text-orange-500 hover:bg-basket-border"
                                            onClick={() => increaseQty(id)}
                                        >
                                            <PlusSVG className="w-4 h-4 stroke-current" />
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-baseline gap-3 mt-2">
                                    <BasketPrice price={price} off={off} />
                                    {off > 0 && (
                                        <span className="text-gray-400 text-xs relative mb-1 line-through">
                                            {price.toLocaleString()} تومان
                                        </span>
                                    )}
                                </div>
                            )}
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
