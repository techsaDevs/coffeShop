import React from 'react'
import Container from '../Container'
import SectionHeader from '../SectionHeader'

const Products = () => {
    return (
        <div id='products' className='min-h-[900px] bg-product pt-8 md:pt-24 lg:pt-48'>
            <Container>
                <SectionHeader mode='title-caption-link' title="جدید ترین محصولات" caption="فرآوری شده از دانه قهوه" link="/products" linkTitle='مشاهده همه محصولات' />
            </Container>
        </div>
    )
}

export default Products