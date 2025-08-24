import React from 'react'
import Container from '../Container'
import SectionHeader from '../SectionHeader'
import { IProduct } from '@/lib/types'
import Product from './Products/Product'
import axiosInst from '@/lib/axiosConfig'

const Products = async () => {
    
    const res = await fetch("http://localhost:3001/products")
    const data: IProduct[] = await res.json()

    return (
        <div id='products' className='min-h-[900px] bg-product mt-8 md:mt-24 lg:mt-48'>
            <Container>
                <SectionHeader mode='title-caption-link' title="جدید ترین محصولات" caption="فرآوری شده از دانه قهوه" link="/products" linkTitle='مشاهده همه محصولات' />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5">
                    {
                        data.map((item) => (
                            <Product key={item.id} {...item} />
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default Products