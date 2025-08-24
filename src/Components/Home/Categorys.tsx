import React from 'react';
import Container from '../Container';
import { ICategorys } from '@/lib/types';
import Link from 'next/link';

const Categorys = () => {

  const category: ICategorys[] = [
    {
      id: "1",
      title: "قهوه و اسپرسو دمی",
      image: "categories/category1.png",
      link: "/category/coffe-spperso"
    },
    {
      id: "2",
      title: "لوازم جانبی و تجهیزات",
      image: "categories/category2.png",
      link: "/category/tools"
    },
    {
      id: "3",
      title: "اسپرسو ساز",
      image: "categories/category3.png",
      link: "/category/spperso-maker"
    },
    {
      id: "4",
      title: "پک تستر قهوه",
      image: "categories/category4.png",
      link: "/category/pack-tester-coffe"
    },
    {
      id: "5",
      title: "قهوه ترک",
      image: "categories/category5.png",
      link: "/category/coffe-turk"
    },
  ]

  return (
    <section id='category' className='mb-10 md:mb-24-1'>
      <Container>
        <div className='flexCenter gap-y-6 gap-x-[29px] gap-[65px] flex-wrap'>
          {category.map(({ id, title, link, image }) =>  (
              <div key={id} className="text-center w-24-1 md:w-50">
                <Link href={link} className=''>
                  <img src={image} alt={title} loading='lazy' />
                </Link>
                <p className="font-dana-dbold text-center text-sm md:text-xl mt-1.5 md:mt-2.5">{title}</p>
              </div>
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default Categorys;