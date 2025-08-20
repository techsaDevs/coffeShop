import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <section className="bg-[url('/bg-login-md.png')] md:bg-[url('/bg-login-lg.png')] h-screen w-screen bg-cover bg-center flex items-center justify-center">
        <div className='max-w-md min-w-80 bg-[rgba(0,0,0,0.4)] rounded shadow-2xl p-4 backdrop-blur-[6px]'>
            <div className='absolute'></div>
            <form className='flex justify-center flex-col'>
                <h3 className='font-bold text-2xl text-center text-brown-100 mb-10'>وارد حساب کاربری شوید</h3>
                <input type="text" className='bg-white rounded p-2.5 focus:outline-0 mb-5' placeholder='شماره موبایل یا ایمیل...'/>
                <input type="text" className='bg-white rounded p-2.5 focus:outline-0' placeholder='رمز عبور...'/>
                <button className='bg-brown-600 p-2.5 w-full text-white font-bold text-xl rounded my-8'>ورود </button>
                <p className='text-center text-white '>آیا حساب کاربری ندارید؟ <Link href='/register' className='simple-link '> ثبت نام کنید</Link></p>
                <Link href='/forgot-password' className=' simple-link text-center mt-3'>رمز عبورم را فراموش کرده ام</Link>
            </form>
        </div>
    </section>
  )
}

export default Login
