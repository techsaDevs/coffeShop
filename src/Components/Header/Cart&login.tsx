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
import ArrowLeftSVG from '../SVGs/ArrowLeftSVG';

const Cartlogin = () => {
  const [isLoggedin, setIsLoggedin] = useState<boolean>(true)
  const [user, setUser] = useState({
    username: "techsa team",
    basket: [
      { id: 2 , qty: 1 },
      { id: 4, qty: 3},
    ]
  })
  const [isOpen, setIsOpen] = useState(false);
  const [productsInBasket, setProductsInBasket] = useState<IProduct[] | []>([]);

  useEffect(() => {
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

    fetchProducts();
  }, [user.basket]);


  return (
    <div className="flex text-orange-200">
      {/* basket & theme toggle */}
      <div className="flex items-center gap-x-5 ml-10">
        {/* basket logo */}
        <div className="flex">
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
                      className="headerHoverBox space-y-4 left-0 p-5 w-[400px] childs:text-foreground"
                    >
                      <div className="flex items-center justify-between">
                        <span className='tracking-tightest text-sm text-gray-300'>{productsInBasket.length} مورد</span>
                        <Link href="/basket" className='flex items-center gap-1'>
                          <span className="text-sm">مشاهده سبد خرید</span>
                          <ArrowLeftSVG className='size-[20px]' />
                        </Link>
                      </div>
                      {productsInBasket.map(({ id, title }) => (
                        <motion.li
                          key={id}
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -5 }}
                          transition={{ duration: 0.2, delay: 0.05 }}
                        >
                          {title}
                        </motion.li>
                      ))}
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

        </div>

        {/* theme toggle */}
        <ThemeToggleButton />
      </div>
      {/* divided border */}
      <span className="w-px h-14 block bg-white/20" />
      {/* login link */}
      {!isLoggedin ? (
        <Link href={"/login"} className="flex items-center px-4 py-3 rounded-full hover:bg-orange-200/10 gap-3 duration-150 mr-6">
          <ArrowLeftEndOnRectangleSVG className='rotate-180' />
          <span className='text-xl select-none tracking-tightest'>
            ورود | ثبت نام
          </span>
        </Link>
      ) : (
        <Link href={"/profile"} className="flex items-center px-4 py-3 rounded-full hover:bg-orange-200/10 duration-150 mr-6 select-none gap-3">
          <UserSVG />
          <span className=''>
            {user.username}
          </span>
        </Link>
      )}

    </div>
  );
};

export default Cartlogin;