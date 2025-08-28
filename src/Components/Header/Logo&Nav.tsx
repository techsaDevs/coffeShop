"use client";

import { useEffect, useState } from "react";
import { useMenuStore } from "@/stores/menuStore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

const subMenuVariants: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeOut" }, // درست شد
  },
};

const LogoNav = () => {
  const { menu, loading, getMenu } = useMenuStore();
  const [openSubMenuId, setOpenSubMenuId] = useState<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    getMenu();
  }, [getMenu]);

  return (
    <nav className="flex items-center gap-x-6 lg:gap-x-9 h-14">
      {/* Logo */}
      <img
        src="/app-logo.png"
        alt="Golden Coffee"
        className="h-10 lg:h-12 w-auto shrink-0"
      />

      {/* Menu List */}
      <ul className="flex gap-x-[22px] lg:gap-x-9 text-[17px] lg:text-xl text-gray-300 tracking-tightest h-full childs:leading-[56px]">
        {menu.map(({ id, title, link, subMenu }) => {
          const isActive = pathname === link;
          const isOpen = openSubMenuId === +id;

          return (
            <li
              key={id}
              className="relative"
              onMouseEnter={() => setOpenSubMenuId(+id)}
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

              {subMenu && (
                <AnimatePresence>
                  {isOpen && (
                    <motion.ul
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={subMenuVariants}
                      className="headerHoverBox right-0 tracking-normal 
                      childs:inline-block p-6 w-52 space-y-4 z-20"
                    >
                      {loading ? (
                        <motion.li
                          className="text-orange-300"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          در حال بارگذاری...
                        </motion.li>
                      ) : (
                        subMenu.map(({ id: subId, title, link }) => {
                          const isSubActive = pathname === link;
                          return (
                            <motion.li
                              key={subId}
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
