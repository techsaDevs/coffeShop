"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from '@/stores/cartStore';
import { useAuthStore } from '@/stores/authStore';
import ArrowLeftSVG from '../SVGs/nav/ArrowLeftSVG';
import CartSVG from '../SVGs/nav/CartSVG';
import MinusSVG from '../SVGs/MinusSVG';
import PlusSVG from '../SVGs/PlusSVG';
import BasketPrice from './BasketPrice';

interface ICartProps {
  mode: "Initial price" | "qty";
}

const Cart = ({ mode }: ICartProps) => {
  const {
    productsInBasket,
    finalTotal,
    isOpen,
    fetchProducts,
    increaseQty,
    decreaseQty,
    toggleCart,
  } = useCartStore();

  const { isLoggedin } = useAuthStore()

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="flex">
      {isLoggedin ? (
        <div
          className="leading-2 group relative"
          onMouseEnter={() => toggleCart(true)}
          onMouseLeave={() => toggleCart(false)}
        >
          <Link className="inline-block py-3 cursor-pointer" href={"/basket"}>
            <CartSVG className='size-7 lg:size-8' />
          </Link>

          <AnimatePresence>
            {isOpen && (
              productsInBasket.length ? (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="headerHoverBox space-y-4 left-0 p-5 w-[400px] childs:text-foreground"
                >
                  {/* header */}
                  <div className="flexBetween">
                    <span className='text-xs text-gray-300 font-dana-medium'>{productsInBasket.length} مورد</span>
                    <Link href="/basket" className='flex items-center gap-1'>
                      <span className="ml-0 text-orange-300 transition-all duration-300 text-sm">مشاهده سبد خرید</span>
                      <ArrowLeftSVG className='size-[16px] text-orange-300' />
                    </Link>
                  </div>

                  {/* body */}
                  <ul className={`border-b border-b-basket-border divide-y divide-basketItem-border childs:pt-6 childs:pb-5 pb-1
                       ${productsInBasket.length > 3 ? "max-h-[400px] overflow-y-auto pr-1" : ""}`}>
                    {productsInBasket.map(({ id, title, image, price, off, qty }) => (
                      <motion.li key={id} initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -5 }} transition={{ duration: 0.2, delay: 0.05 }} className='flex items-center gap-x-2.5'>
                        <img className='w-30 h-30' src={image} alt={title} />
                        <div className="flex flex-col justify-start gap-y-4">
                          <h4 className="font-dana-medium text-foreground text-base line-clamp-2">{title} {qty ? (<>× {qty}</>) : ""}</h4>

                          {mode === "qty" ? (
                            <div className="flexBetween flex-row-reverse gap-4 mt-1">
                              <BasketPrice price={price} off={off} />
                              <div className="flex items-center rounded-full border border-basketItem-border overflow-hidden">
                                <button className="px-1.5 py-1.75 flexCenter text-orange-300 hover:bg-basket-border" onClick={() => decreaseQty(id)}>
                                  <MinusSVG className="w-4 h-4 stroke-current" fill='' />
                                </button>
                                <span className="px-2 py-1.75 text-sm font-medium border-x border-basketItem-border flexCenter text-orange-300">{qty}</span>
                                <button className="px-1.5 py-1.75 flexCenter text-orange-300 hover:bg-basket-border" onClick={() => increaseQty(id)}>
                                  <PlusSVG className="w-4 h-4 stroke-current" fill='' />
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div className="flex items-end gap-4">
                              <div className="flex items-baseline gap-2">
                                <BasketPrice price={price} off={off} />
                              </div>
                              {off > 0 && <span className="text-gray-400 text-xs relative mb-1">{price.toLocaleString()} تومان
                                <span className="absolute left-0 right-0 top-1/2 h-[2px] bg-gray-400/50 rotate-[-8deg]" />
                              </span>}
                            </div>
                          )}
                        </div>
                      </motion.li>
                    ))}
                  </ul>

                  {/* footer */}
                  <div className="flexBetween">
                    <div>
                      <span className="tracking-tighter font-dana-medium text-gray-300 text-xs">مبلغ قابل پرداخت</span>
                      <span className="font-dana-dbold text-lg block">{finalTotal.toLocaleString()} تومان</span>
                    </div>
                    <Link href="/basket" className='basketBtn text-lg px-[27px] py-[13px]'>ثبت سفارش</Link>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty-cart"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="headerHoverBox left-0 p-8 pb-10 w-[400px] flex flex-col items-center gap-y-8 "
                >
                  <div className="flex flex-col items-center gap-3">
                    <CartSVG className='size-16 stroke-foregray' />
                    <span className="text-foreground">هنوز محصولی به سبد خرید اضافه نشده</span>
                  </div>
                  <Link href="/product" className='basketBtn text-lg px-[27px] py-[13px]'>مشاهده صفحه فروشگاه</Link>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>
      ) : (
        <div
          className="leading-2 group relative"
          onMouseEnter={() => toggleCart(true)}
          onMouseLeave={() => toggleCart(false)}
        >
          <Link className="inline-block py-3 cursor-pointer" href={"/login"}>
            <CartSVG className='size-7 lg:size-8' />
          </Link>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="headerHoverBox left-0 p-5 w-[400px] childs:text-foreground flexBetween"
              >
                <span className="leading-none">برای مشاهده سبد خرید ابتدا وارد شوید</span>
                <Link href="/login" className="!text-blue-500 font-semibold relative
                      after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px]
                      after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full
                      ">
                  ورود | ثبت نام
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default Cart;