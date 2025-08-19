"use client"
import React, { useEffect, useState } from 'react';
import ThemeToggleButton from './ThemeToggleButton';
import ArrowLeftEndOnRectangleSVG from '../SVGs/nav/ArrowLeftEndOnRectangleSVG';
import Link from 'next/link';
import UserSVG from '../SVGs/nav/UserSVG';
import ShoppingCartSVG from '../SVGs/nav/ShoppingCartSVG';
import { motion, AnimatePresence } from "framer-motion";
import axiosInst from '@/lib/axiosConfig';
import { IProduct } from '@/lib/types';

const Cartlogin = () => {
  const [isLoggedin, setIsLoggedin] = useState<boolean>(true)
  const [user, setUser] = useState({
    username: "techsa team",
    basket: [
      { id: 1, qty: 1, },
      { id: 2, qty: 5, }
    ]
  })
  const [isOpen, setIsOpen] = useState(false);
  const [productsInBasket, setProductsInBasket] = useState<IProduct[] | []>([]);

  useEffect(() => {
    const fetchProducts = async () => {
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
    };

    fetchProducts();
  }, [user.basket]);


  return (
    <div className="flex text-orange-200">
      {/* basket & theme toggle */}
      <div className="flex items-center gap-x-5 ml-10">
        {/* basket logo */}
        <div className="flex ">{
          isLoggedin ?
            (
              <div
                className="leading-2 group relative"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                {/* فقط همین wrapper داخلی clickable باشه */}
                <div className="inline-block py-3 cursor-pointer">
                  <ShoppingCartSVG />
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full shadow-coffe 
                      border-t-[3px] border-orange-300 text-base bg-background
                      rounded-2xl p-6 w-52 space-y-4 childs:text-foreground"
                    >
                      {
                        !productsInBasket.length ? (
                          <motion.li
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -5 }}
                            transition={{ duration: 0.2, delay: 0.05 }}
                          >
                            هیچ محصولی در سبد خرید شما نیست
                          </motion.li>
                        ) : (
                          <>
                            {
                              productsInBasket.map(({ id, title }) => (
                                <motion.li
                                  key={id}
                                  initial={{ opacity: 0, x: -5 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -5 }}
                                  transition={{ duration: 0.2, delay: 0.05 }}
                                >
                                  {title}
                                </motion.li>
                              ))
                            }
                          </>
                        )
                      }

                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

            ) : (<Link href={"/login"} className='py-3'> <ShoppingCartSVG /> </Link>)
        }</div>
        {/* theme toggle */}
        <ThemeToggleButton />
      </div>
      {/* divided border */}
      <span className="w-px h-14 block bg-white/20" />
      {/* login link */}
      {
        isLoggedin ? (
          <Link href={"/login"} className="flex items-center px-4 py-3 rounded-full hover:bg-orange-200/10 gap-3 duration-150 mr-6">
            <ArrowLeftEndOnRectangleSVG className='rotate-180' />
            <span className='text-xl select-none tracking-tightest'>
              ورود | ثبت نام
            </span>
          </Link>
        ) : (
          <Link href={"/basket"} className="flex select-none gap-3">
            <UserSVG />
            <span className=''>
              {user.username}
            </span>
          </Link>
        )
      }
    </div>
  );
};

export default Cartlogin;