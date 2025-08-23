
import React from 'react'
import LoginForm from '@/Components/auth/loginForm'

const Login = () => {
  return (
    <section className="bg-[url('/bg-login-md.png')] md:bg-[url('/bg-login-lg.png')] h-screen w-screen bg-cover bg-center flex items-center justify-center">
      <div className="max-w-md min-w-80 bg-[rgba(0,0,0,0.4)] rounded shadow-2xl p-4 backdrop-blur-[6px]">
        <LoginForm/>
      </div>
    </section>
  )
}

export default Login
