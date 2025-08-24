import React from 'react'
import Container from '../Container'
import SectionHeader from '../SectionHeader'
import { IProduct } from '@/lib/types'
import Product from './Products/Product'
import SliderBestSelling from './BestSelling/SliderBestSelling'
import PrevNextBtn from "@/Components/Home/BestSelling/PrevNextBtn"

const BestSelling = async () => {

  const res = await fetch("http://localhost:3001/products")
  const data: IProduct[] = await res.json()

  // محاسبه میانگین ستاره‌ها
  const productsWithRating = data.map((product) => {
    const stars = product.starCount
    const avgStar =
      stars.length > 0
        ? stars.reduce((a, b) => a + b, 0) / stars.length
        : 0
    return { ...product, avgStar }
  })

  // مرتب‌سازی بر اساس میانگین ستاره (بیشترین به کمترین)
  const sortedProducts = productsWithRating.sort((a, b) => b.avgStar - a.avgStar)
  console.log(sortedProducts)

  const productElements = sortedProducts.map(item => <Product key={item.id} {...item} />);

  return (
    <div id='best-selling'>
      <Container>
        <SectionHeader mode='title-caption-children' title='محصولات پر فروش' caption='پیشنهاد ویژه برای قهوه خورا' >
          <PrevNextBtn />
        </SectionHeader>

        {/* Swiper */}
        <SliderBestSelling serverProducts={productElements} />

      </Container>
    </div>
  )
}

export default BestSelling;