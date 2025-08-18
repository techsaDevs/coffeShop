"use client";

import { useEffect, useState } from "react";
import { IHeaderMenu } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import axiosInst from "@/lib/axiosConfig";
import { AxiosError } from "axios";

const defaultMenu: IHeaderMenu[] = [
  { id: 1, title: "صفحه اصلی", link: "/" },
  { id: 2, title: "فروشگاه", link: "/shop" },
  { id: 3, title: "دیکشنری", link: "/dictionary" },
  { id: 4, title: "بلاگ", link: "/blog" },
  { id: 5, title: "درباره ما", link: "/about" },
  { id: 6, title: "تماس با ما", link: "/contact" },
];

const LogoNav = () => {
  const [menu, setMenu] = useState<IHeaderMenu[]>(defaultMenu);
  const [loadingSubMenu, setLoadingSubMenu] = useState(true);
  const [openSubMenuId, setOpenSubMenuId] = useState<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const getMenu = async () => {
      try {
        const { data } = await axiosInst.get("/headerMenu");
        setMenu(data);
      } catch (err) {
        const error = err as AxiosError;
        toast.error("مشکلی در دریافت منو پیش آمد!", { position: "bottom-right" });
        console.error("خطا در دریافت منو:", error);
      } finally {
        setLoadingSubMenu(false);
      }
    };

    getMenu();
  }, []);

  const subMenuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="flex items-center gap-x-9">
      <div>
        <img src="/app-logo.png" alt="Golden Coffee" className="h-12 w-auto" />
      </div>

      <ul className="flex gap-x-9 text-xl text-gray-300 tracking-tightest">
        {menu.map(({ id, title, link, subMenu }) => {
          const isActive = pathname === link;

          return (
            <li
              key={id}
              className="relative"
              onMouseEnter={() => setOpenSubMenuId(id)}
              onMouseLeave={() => setOpenSubMenuId(null)}
            >
              <Link
                href={link}
                className={`transition ${
                  isActive ? "text-orange-200 font-bold" : "hover:text-orange-200"
                }`}
              >
                {title}
              </Link>

              {subMenu?.length && (
                <AnimatePresence>
                  {openSubMenuId === id && (
                    <motion.ul
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={subMenuVariants}
                      className="absolute left-0 top-full text-gray-300 bg-white shadow-md rounded-lg p-2 min-w-[150px]"
                    >
                      {loadingSubMenu ? (
                        <motion.li
                          className="px-4 py-2 text-gray-400"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          Loading...
                        </motion.li>
                      ) : (
                        subMenu.map(({ id, title, link }) => {
                          const isSubActive = pathname === link;

                          return (
                            <motion.li
                              key={id}
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                              variants={subMenuVariants}
                              transition={{ duration: 0.2 }}
                            >
                              <Link
                                href={link}
                                className={`block px-4 py-2 transition ${
                                  isSubActive
                                    ? "text-orange-200 font-dana-medium"
                                    : "hover:bg-gray-100"
                                }`}
                              >
                                {title}
                              </Link>
                            </motion.li>
                          );
                        })
                      )}
                    </motion.ul>
                  )}
                </AnimatePresence>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default LogoNav;