"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ShoppingCartSVG from '../SVGs/nav/ShoppingCartSVG';
import { motion, AnimatePresence } from "framer-motion";
import axiosInst from '@/lib/axiosConfig';
import { IProduct } from '@/lib/types';
import ArrowLeftSVG from '../SVGs/ArrowLeftSVG';
import BasketPrice from './BasketPrice';

const Cart = () => {
  const [isLoggedin, setIsLoggedin] = useState<boolean>(true)
  const [user, setUser] = useState({
    username: "techsa team",
    basket: [
      { id: 2, qty: 1 },
      { id: 4, qty: 3 },
    ]
  })
  const [isOpen, setIsOpen] = useState(false);
  const [productsInBasket, setProductsInBasket] = useState<IProduct[] | []>([]);
  const [finalTatol, setFinalTatol] = useState<number>(0)

  const fetchProducts = async () => {
    if (user.basket.length) {
      try {
        const response = await axiosInst("/products");
        const products: IProduct[] = response.data; // مستقیم آرایه
        const filteredProducts = products.filter(product =>
          user.basket.some(item => item.id === Number(product.id)) // id ها رو به Number تبدیل کن
        );

        const productsWithQty = filteredProducts.map(product => {
          const basketItem = user.basket.find(item => item.id === Number(product.id));
          return { ...product, qty: basketItem?.qty || 0 };
        });

        console.log(productsWithQty);
        setProductsInBasket(productsWithQty);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
  };

  const claculatorPriceAllBasket = () => {
    if (productsInBasket.length) {
      const result = productsInBasket.reduce((total, product) => {
        const disCount = (Number(product.price) * Number(product.off || 0)) / 100;
        const finalPrice = Number(product.price) - disCount;
        return total + finalPrice * (product.qty || 1);
      }, 0)
      setFinalTatol(result)
    }
  }

  useEffect(() => {
    fetchProducts();
    claculatorPriceAllBasket()
  }, [user.basket]);

  return (
          <div className="flex">
            {isLoggedin ? (
              <div
                className="leading-2 group relative"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                {/* آیکون سبد خرید */}
                <Link className="inline-block py-3 cursor-pointer" href={"/basket"}>
                  <ShoppingCartSVG />
                </Link>

                {/* باکس dropdown */}
                <AnimatePresence>
                  {isOpen && productsInBasket.length ? (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="headerHoverBox space-y-4 left-0 p-5 w-[400px] childs:text-foreground mt-5"
                    >
                      {/* cart header */}
                      <div className="flex items-center justify-between">
                        <span className=' text-xs text-gray-300 font-dana-medium'>{productsInBasket.length} مورد</span>
                        <Link href="/basket" className='flex items-center gap-1'>
                          <span className="ml-0 text-orange-300 transition-all duration-300 text-sm">مشاهده سبد خرید</span>
                          <ArrowLeftSVG className='size-[16px] text-orange-300' />
                        </Link>
                      </div>
                      {/* cart body */}
                      {productsInBasket.map(({ id, title, image, price, off }) => (
                          <motion.li
                            key={id}
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -5 }}
                            transition={{ duration: 0.2, delay: 0.05 }}
                            className=''
                          >
                            <div className="flex items-center gap-x-2.5 pb-6 border-b border-b-basket-border">

                            <img className='w-30 h-30' src={image} alt={title} />
                            <div className="flex flex-col justify-start gap-y-4">
                              <h4 className="font-dana-medium text-foreground text-base">{title}</h4>
                              <div className="">
                                {
                                  off > 0 ? (
                                    <span className="text-foregreen text-xs">{((price * off) / 100).toLocaleString()} تومان تخفیف</span>
                                  ) : null
                                }
                                <BasketPrice price={price} off={off} />
                              </div>
                            </div>
                                </div>
                          </motion.li>
                        )
                      )}
                      {/* cart footer */}
                      <div className="flex items-center justify-between">
                        <div className="">
                          <span className="text- text-xs">مبلغ قابل پرداخت</span>
                          <BasketPrice price={128500} off={0} />
                        </div>
                        <Link href="/" className='basketBtn'>ثبت سفارش</Link>
                      </div>
                    </motion.ul>
                  ) : (
                    <AnimatePresence>
                      {isOpen && !productsInBasket.length && (
                        <motion.div
                          key="empty-cart"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="headerHoverBox space-y-4 left-0 p-5 w-[400px] text-foreground"
                        >
                          سبد خرید خالی است
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div
                className="leading-2 group relative"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <Link className="inline-block py-3 cursor-pointer" href={"/login"}>
                  <ShoppingCartSVG />
                </Link>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="headerHoverBox left-0 p-5 w-[400px] childs:text-foreground flex items-center justify-between"
                    >
                      <span className="leading-none">برای مشاهده سبد خرید ابتدا وارد شوید</span>

                      <Link
                        href="/login"
                        className="!text-blue-500 font-semibold relative
                        after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px]
                      after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                      >
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