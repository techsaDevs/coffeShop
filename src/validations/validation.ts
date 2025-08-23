import * as yup from 'yup'

export const loginSchema = yup.object().shape({
    information : yup.string().min(11).required(),
    password: yup.string().min(5).max(20).required()
})

