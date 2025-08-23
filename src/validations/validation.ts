import * as yup from 'yup'

export const loginSchema = yup.object().shape({
    information : yup.string().min(11, 'حداقل باید 11 کاراکتر وارد کنید').required('وارد کردن این فیلد اجباری است'),
    password: yup.string().min(5, 'حداقل باید 5 کاراکتر وارد کنید').max(20, 'حداکثر میتوانید 20 کاراکتر وارد کنید').required('وارد کردن این فیلد اجباری است')
})

