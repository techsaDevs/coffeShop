import React from 'react'
import Container from '../Container'
import PhoneBtn from './Contact/PhoneBtn';

const Contact = () => {
  return (
    <section id='contact'>
        <Container>
          <div className="flex flex-col items-center md:items-start md:flex-row gap-6">
          <div>
            <img src="/contact.png" alt="Contact" className='size-62 md:size-auto' />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-morabba-bold text-4xl mb-2">یکی از بهترین قهوه ها !</h3>
            <span className="font-morabba-medium mb-3 md:mb-0 text-[22px] opacity-70">کیفیت قهوه را از ما بخواهید  ...</span>
            <span className="text-2xl hidden md:block">...</span>
            <p className="font-dana-medium text-lg mb-5">فضای گرم و دنج ما را احساس کنید، جایی که همه می توانند قهوه معطری پیدا کنند و دسرهای خوشمزه ما را که کاملا با قهوه داغ همراه شده است، امتحان کنند. فضای داخلی شیک و کارکنان خوش برخورد ما روز شمارا می سازد!</p>
             <PhoneBtn />
          </div>
          </div>
        </Container>
    </section>
  )
}

export default Contact;