import React from 'react'
import Container from '../Container'
import SectionHeader from '../SectionHeader'

const BestSelling = () => {
  return (
    <div id='best-selling'>
        <Container>
            <SectionHeader mode='title-caption-children' title='محصولات پر فروش' caption='پیشنهاد ویژه برای قهوه خورا' >
              <button className="bg-background w-8 h-8 flexCenter pt-1.5 cursor-pointer rounded-full">{"<"}</button>
              <button className="bg-background w-8 h-8 flexCenter pt-1.5 cursor-pointer rounded-full">{">"}</button>
            </SectionHeader>
        </Container>
    </div>
  )
}

export default BestSelling