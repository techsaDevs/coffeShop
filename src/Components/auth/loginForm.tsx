'use client'
import React from 'react'
import { LockClosedIcon, UserPlusIcon, KeyIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
const LoginForm = () => {
  return (
    <form className="flex justify-center flex-col">
          <h3 className="font-bold text-2xl text-center text-brown-100 mb-10 flex items-center justify-center gap-2">
            <LockClosedIcon className="w-7 h-7 text-brown-200" />
            وارد حساب کاربری شوید
          </h3>
          <input
            type="text"
            className="bg-white rounded p-2.5 focus:outline-0 mb-5"
            placeholder="شماره موبایل یا ایمیل..."
          />
          <input
            type="password"
            className="bg-white rounded p-2.5 focus:outline-0"
            placeholder="رمز عبور..."
          />
          <button className="bg-brown-600 p-2.5 w-full text-white font-bold text-xl rounded my-8">
            ورود
          </button>
          <p className="text-white flex gap-1 justify-center">
            آیا حساب کاربری ندارید؟
            <Link href="/register" className="simple-link flex items-center justify-center gap-1">
            <UserPlusIcon className="w-5 h-5 text-brown-200" />
              ثبت نام کنید
            </Link>
          </p>
          <Link
            href="/forgot-password"
            className="simple-link text-center mt-3 flex items-center justify-center gap-1"
          >
            <KeyIcon className="w-5 h-5 text-brown-200" />
            رمز عبورم را فراموش کرده ام
          </Link>
        </form>
  )
}

export default LoginForm
