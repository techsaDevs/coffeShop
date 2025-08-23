import Link from 'next/link'
import React from 'react'
import Container from '../Container'

const Popular = () => {
  return (
    <section id='popular' className='py-18'>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/">
            <img src="/popular/1.png" alt="انواع قهوه ، ترکیبی و تک خاستگاه" className='w-full' />
          </Link>
          <Link href="/">
            <img src="/popular/2.png" alt="پودر های فوری ، نسکافه و هات چاکلت" className='w-full' />
          </Link>
        </div>
      </Container>
    </section >
  )
}

export default Popular