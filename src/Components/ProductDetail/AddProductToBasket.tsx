"use client"

import { toast } from "react-toastify"

const AddProductToBasket = ({ productId }: { productId: string }) => {

  const addProductToBasketWithID = () => {
    console.log(productId)
    toast.success("محصول با موفقیت به سبد خرید شما اضافه شد")
  }

  return (
    <button className="basketBtn text-lg px-[27px] py-[13px] mt-3 cursor-pointer" onClick={addProductToBasketWithID}>افزودن به سبد خرید</button>
  )
}

export default AddProductToBasket