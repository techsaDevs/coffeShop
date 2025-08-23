import React from 'react'
import Container from '../Container'
import SectionHeader from '../SectionHeader'
import { IProduct } from '@/lib/types'
import Product from './Products/Product'

const Products = () => {

    const Arr: IProduct[] = [
        {
            id: 1,
            title: "قهوه اسپرسو بن مانو مدل مانوکا 250 گرم",
            image: "/products/p1.png",
            price: 175000,
            off: 12,
            count: 50,
            starCount: [1,2,4,2,3,5,4,2,3,1,3,2,4,5,3,2,1,4,5,3]
        },
        {
            id: 2,
            title: "قهوه اسپرسو بن مانو مدل مانوکا 250 گرم",
            image: "/products/p1.png",
            price: 175000,
            off: 12,
            count: 50,
            starCount: [1,4,2,3,1,5,2,3,1,5,4,2,3]
        },
        {
            id: 3,
            title: "قهوه اسپرسو بن مانو مدل مانوکا 250 گرم",
            image: "/products/p1.png",
            price: 175000,
            off: 12,
            count: 50,
            starCount: [1,4,5,3,1,5,3,1,2,5,3,4,5,3,4,2,3]
        },
        {
            id: 4,
            title: "قهوه نورسکا 9 صبح بن مانو (60گرمي)",
            image: "/products/p5.png",
            price: 143000,
            off: 0,
            count: 50,
            starCount: [4,1,2,3,4,5,2,3,5,1,2,3,4,5,3,4]
        },
        {
            id: 5,
            title: "قهوه نورسکا 9 صبح بن مانو (60گرمي)",
            image: "/products/p5.png",
            price: 143000,
            off: 0,
            count: 50,
            starCount: [5,1,2,3,3,4,5,2,1]
        },
        {
            id: 6,
            title: "قهوه نورسکا 9 صبح بن مانو (60گرمي)",
            image: "/products/p5.png",
            price: 143000,
            off: 0,
            count: 50,
            starCount: [4,1,2,3,5,4,3,2,1,5,4,3]
        },
    ]

    return (
        <div id='products' className='min-h-[900px] bg-product pt-8 md:pt-24 lg:pt-48'>
            <Container>
                <SectionHeader mode='title-caption-link' title="جدید ترین محصولات" caption="فرآوری شده از دانه قهوه" link="/products" linkTitle='مشاهده همه محصولات' />

                <div className="grid grid-cols-3">
                    {
                        Arr.map((item) => (
                            <Product key={item.id} {...item} />
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default Products