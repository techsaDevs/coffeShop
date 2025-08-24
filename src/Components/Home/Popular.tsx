import Link from 'next/link'
import React from 'react'
import Container from '../Container'

const Popular = () => {
  return (
    <section id='popular' className='mt-8 mb-10 md:my-20 '>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/" className="relative block overflow-hidden rounded-2xl">
            <img src="/categories/category-right.jpg" alt="قهوه" className="w-full rounded-2xl " />
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-l from-black/95 via-black/60 to-black/30" />
            <div className="absolute text-white top-1/2 right-12 -translate-y-1/2">
              <h3 className="font-dana-medium text-2xl lg:text-4xl mb-5">انواع قهوه</h3>
              <p className="text-base lg:text-xl">ترکیبی و تک خاستگاه</p>
            </div>
          </Link>

          <Link href="/" className="relative block overflow-hidden rounded-2xl">
            <img src="/categories/category-left.jpg" alt="نسکافه" className="w-full rounded-2xl " />
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-l from-black/95 via-black/60 to-black/30" />
            <div className="absolute text-white top-1/2 right-12 -translate-y-1/2">
              <h3 className="font-dana-medium text-2xl lg:text-4xl mb-5">پودر های فوری</h3>
              <p className="text-base lg:text-xl">نسکافه و هات چاکلت ، ماسالا</p>
            </div>
          </Link>

        </div>
      </Container>
    </section>
  )
}

export default Popular