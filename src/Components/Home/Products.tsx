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
        <section id='products' className='min-h-[900px] bg-product mt-3 pt-8 md:pt-24 lg:mt-4 lg:pt-44'>
            <Container>
                <SectionHeader mode='title-caption-link' title="جدید ترین محصولات" caption="فرآوری شده از دانه قهوه" link="/products" linkTitle='مشاهده همه محصولات' />
                <div className="warraperBoxes">
                    {
                        data.map((item) => (
                            <Product key={item.id} {...item} />
                        ))
                    }
                </div>
            </Container>
        </section>
    )
}

export default Products