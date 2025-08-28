"use client"
import React from 'react';
import { CartSVG } from "@/Components/SVGs";
import axiosInst from '@/lib/axiosConfig';
import { useAuthStore } from '@/stores/authStore';
import { handleNotLoggedBasketClick } from '@/Components/Header/mobile/BurgerMenu';

interface IAddProduct {
    id: string;
}

const AddProduct = ({ id }: IAddProduct) => {

    const { user, isLoggedin } = useAuthStore()

    const handleAddToProduct = async () => {
        console.log(id)
        if (isLoggedin) {
            try {
                const { data } = await axiosInst.get(`/users/${user?.id}`)
                console.log(data)

            } catch (err) {
                console.log(err)
            }
        } else {
            handleNotLoggedBasketClick({ logginMassage: "برای اضافه کردن محصول ابتدا وارد شوید", parentClassName: "flex flex-col text-black" })
        }
    }

    return (
        <button onClick={handleAddToProduct} className="flexCenter bg-foregray/20 w-8 h-8 rounded-full cursor-pointer">
            <CartSVG width={18} height={18} className='stroke-foreground/60' />
        </button>
    );
};

export default AddProduct;