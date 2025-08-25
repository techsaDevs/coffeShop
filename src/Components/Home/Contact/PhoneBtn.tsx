"use client"
import React from "react"
import { motion } from "framer-motion"

const PhoneBtn = () => {
  return (
    <motion.button
      type="button"
      className="p-3 border border-orange-300 rounded-full text-orange-300 cursor-pointer flexBetween gap-3"
      whileHover="hover"
      initial="rest"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        width={28}
        height={28}
        className="origin-center"
        variants={{
          rest: { x: 0, rotate: 0, scale: 1 },
          hover: {
            x: [0, -3, 3, -2, 2, -1, 1, 0],
            rotate: [0, -8, 8, -6, 6, -4, 4, 0],
            scale: [1, 1.05, 0.95, 1.03, 0.97, 1],
            transition: { duration: 0.6, ease: "easeInOut", repeat: 0 }
          }
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 
          1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 
          1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 
          21 3 14.284 3 6V5z"
        />
      </motion.svg>

      <span>ثبت سفارش تلفنی</span>
    </motion.button>
  )
}

export default PhoneBtn