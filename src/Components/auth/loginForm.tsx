'use client'
import React, { useState } from 'react'
import { LockClosedIcon, UserPlusIcon, KeyIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useFormik } from 'formik'
import { loginSchema } from '@/validations/validation'
import axiosInst from '@/lib/axiosConfig'
import { IUser } from '@/lib/types'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { useAuthStore } from '@/stores/authStore'
const LoginForm = () => {
  const { setIsLoggedin } = useAuthStore()
  const [users, setUsers] = useState<IUser[]>([])
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()
  const form = useFormik({
    initialValues: { information: '', password: '' },
    onSubmit: (values, { setSubmitting }) => {
      try {
        axiosInst.get('/users')
          .then((res) => {
            setUsers(res.data)
            const isUser = users.find(user => user.email === values.information || user.phone === values.information)
            if (isUser) {
              if (isUser.password === values.password) {
                setIsLoggedin(true)
                router.push('/profile')
              } else {
                toast.error("رمز عبور وارد شده صحیح نیست")
              }
            } else {
              toast.error("حساب کاربریی با این اطلاعات وجود ندارد")
            }
          })
      } catch (err) {
        toast.error(`: خطایی رخ داده است ${err}`)
      } finally {
        setTimeout(() => {
          setSubmitting(false)
        }, 2000)
      }
    },
    validationSchema: loginSchema
  })
  const persianToEnglishDigits = (str: string) => {
    return str.replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)));
  };
  return (
    <form onSubmit={form.handleSubmit} className="flex justify-center flex-col">
      <h3 className="font-bold text-2xl text-center text-brown-100 mb-10 flex items-center justify-center gap-2">
        <LockClosedIcon className="w-7 h-7 text-brown-200" />
        وارد حساب کاربری شوید
      </h3>
      <input
        type="text"
        name='information'
        value={form.values.information}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        className="bg-white rounded p-2.5 focus:outline-0"
        placeholder="شماره موبایل یا ایمیل..."
      />
      {form.errors.information && <p className='text-red-500 font-dana-medium mt-2'>{form.touched.information && form.errors.information}</p>}
      <div className='bg-white rounded mt-5 overflow-hidden flex justify-between items-center'>
        <input
          type={`${showPassword ? 'text' : 'password'}`}
          name='password'
          value={form.values.password}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          className="bg-white p-2.5 focus:outline-0"
          placeholder="رمز عبور..."
        />
        <button type='button' onClick={() => setShowPassword(!showPassword)} className='ml-2'>{showPassword ? <EyeIcon className="w-6 h-6 text-gray-600 text-center" /> : <EyeSlashIcon className="w-6 h-6 text-gray-600 text-center" />}</button>
      </div>
      {form.errors.password && <p className='text-red-500 font-dana-medium mt-2'>{form.touched.password && form.errors.password}</p>}
      <button disabled={form.isSubmitting || !form.dirty || !form.isValid} className={`bg-brown-600 p-2.5 w-full text-white font-bold text-xl rounded my-8 ${form.isSubmitting && 'opacity-50'}`}>
        {!form.isSubmitting ? 'ورود' : 'درحال ارسال...'}
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
