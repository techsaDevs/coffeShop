"use client"
import React from 'react'
import { ToastContainer } from 'react-toastify'
import { useThemeStore } from '@/stores/themeStore'

const NotificationContainer = () => {

    const {theme} = useThemeStore()

    return (
        <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={true}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme={theme ? "dark" : "light"}
        />
    )
}

export default NotificationContainer