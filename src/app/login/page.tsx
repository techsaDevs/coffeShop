import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <section className="bg-[url('/bg-login-md.png')] md:bg-[url('/bg-login-lg.png')] h-screen w-screen bg-cover bg-center flex items-center justify-center">
        <div className='max-w-md min-w-80 bg-[rgba(0,0,0,0.4)] rounded shadow-2xl p-4'>
            <form className='flex justify-center flex-col'>
                <label htmlFor="information" className='text-white font-bold mb-2 mt-5'>شماره موبایل یا ایمیل : </label>
                <input type="text" className='bg-white rounded p-2.5 focus:outline-0' placeholder='شماره موبایل یا ایمیل...'/>
                <label htmlFor="password" className='text-white font-bold mb-2 mt-5'>رمز عبور : </label>
                <input type="text" className='bg-white rounded p-2.5 focus:outline-0' placeholder='رمز عبور...'/>
                <button className='bg-emerald-500 p-2.5 w-full text-white font-bold text-xl rounded my-8'>ورود </button>
                <p className='text-center text-white '>آیا حساب کاربری ندارید؟ <Link href='/register' className='font-bold text-blue-500'> ثبت نام کنید</Link></p>
                <Link href='/forgot-password' className='font-bold text-blue-500 text-center mt-3'>رمز عبورم را فراموش کرده ام</Link>
            </form>
        </div>
    </section>
  )
}

export default Login
