import Container from '@/Components/Container'
import AddProductToBasket from '@/Components/ProductDetail/AddProductToBasket'
import { IProduct, ParamsID } from '@/lib/types'
import React from 'react'

const ProductDetail = async ({ params }: ParamsID) => {

  const { id } = await params

  const res = await fetch(`http://localhost:3001/products/${id}`)
  const { title, image, count, off, price, starCount }: IProduct = await res.json()

  return (
    <div id="product-page--detail" className='md:pt-40 md:pb-8'>
      <Container>
        <div className='flex'>
          <img src={image} alt="" className='w-96' />
          <div>
            <h1 className="text-2xl mt-16 mb-3">{title}</h1>
            {
              count > 0 ? (
                <>
                  <h3 className="">{count} عدد در انبار باقی مانده</h3>
                  <div className="flex flex-col">
                    {
                      off > 0 ? (
                        <>
                          <span className="">{price.toLocaleString()} قیمت اولیه</span>
                          <span className="">{off}% تخفیف</span>
                          <span className="">{(price - (price * off) / 100).toLocaleString()} قیمت با تخفیف</span>
                        </>
                      ) : (
                        <span className="">{price.toLocaleString()} قیمت محصول</span>
                      )
                    }
                    <span className="">
                      {Array.isArray(starCount) && starCount.length > 0
                        ? (starCount.reduce((prev, curr) => prev + curr, 0) / starCount.length).toFixed(1)
                        : "0"}
                      {' '}میانگین ستاره
                    </span>
                    <AddProductToBasket productId={id} />
                  </div>
                </>
              ) : (
                (<span className="font-dana-dbold text-base md:text-lg text-rose-400">فعلا موجود نیست !</span>)
              )
            }
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ProductDetail