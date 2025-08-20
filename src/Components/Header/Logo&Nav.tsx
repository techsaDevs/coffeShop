"use client";

import { useEffect, useState } from "react";
import { IHeaderMenu } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";
import { motion, AnimatePresence, delay } from "framer-motion";
import axiosInst from "@/lib/axiosConfig";
import { AxiosError } from "axios";

const defaultMenu: IHeaderMenu[] = [
  { id: 1, title: "صفحه اصلی", link: "/" },
  { id: 2, title: "فروشگاه", link: "/#" },
  { id: 3, title: "دیکشنری", link: "/#" },
  { id: 4, title: "بلاگ", link: "/#" },
  { id: 5, title: "درباره ما", link: "/#" },
  { id: 6, title: "تماس با ما", link: "/#" },
];

  export const subMenuVariants = {
    hidden: { opacity: 0, y: -10 , delay: 75 },
    visible: { opacity: 1, y: 0 , delay: 75 },
  };

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

  return (
    <nav className="flex items-center gap-x-9 h-14">
      <div>
        <img src="/app-logo.png" alt="Golden Coffee" className="h-12 w-auto" />
      </div>

      <ul className="flex gap-x-9 text-xl text-gray-300 tracking-tightest h-full childs:leading-[56px]">
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
                      className="headerHoverBox right-0 tracking-normal 
                      childs:inline-block p-6 w-52 space-y-4"
                    >
                      {loadingSubMenu ? (
                        <motion.li
                          className="text-orange-300"
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
                                className={`block text-foreground transition-colors ${
                                  isSubActive
                                    ? "text-orange-300 font-dana-medium"
                                    : "hover:text-orange-300"
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