import React from 'react';
import Container from '../Container';
import { ICategorys } from '@/lib/types';
import Link from 'next/link';

const Categorys = () => {

    const category : ICategorys[] = [
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
    <section id='category' className='pb-20'>
        <Container>
            <div className='grid grid-cols-5'>
                {
                    category.map(({id , title , link , image}) => (
                        <div key={id} className='flex flex-col gap-1 items-center'>
                            <Link href={link} className="">
                                <img src={image} alt={title} />
                            </Link>
                            <p className="font-dana-dbold">{title}</p>
                        </div>
                    ))
                }
            </div>
        </Container>
    </section>
  );
};

export default Categorys;