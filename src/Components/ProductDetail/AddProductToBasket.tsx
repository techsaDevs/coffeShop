"use client"

import { toast } from "react-toastify"

const AddProductToBasket = ({ productId }: { productId: string }) => {

  const addProductToBasketWithID = () => {
    console.log(productId)
    toast.success(
      <div className="flex flex-wrap gap-1">
        <span>محصول با شناسه {productId} با موفقیت</span>
        <span>به سبد خرید شما اضافه شد</span>
        <img
          src="/emoijis/smiling.png"
          alt="واتساپ ایموجی"
          className="w-5 h-5 ml-1"
        />
      </div>
    )
  }

  return (
    <button className="basketBtn text-lg px-[27px] py-[13px] mt-3 cursor-pointer" onClick={addProductToBasketWithID}>افزودن به سبد خرید</button>
  )
}

export default AddProductToBasket