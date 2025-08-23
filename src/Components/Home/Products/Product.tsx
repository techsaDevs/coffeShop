import React, { JSX } from 'react';
import { IProduct } from '@/lib/types';
import StarSVG from '@/Components/SVGs/home/products/StarSVG';
import ArrowLeftRightSVG from '@/Components/SVGs/home/products/ArrowLeftRightSVG';
import CartSVG from '@/Components/SVGs/nav/CartSVG';

const Product = ({ id, title, image, price, off, count, starCount }: IProduct) => {


const renderStars = (): JSX.Element[] => {
  const stars: JSX.Element[] = [];

  if (!starCount || starCount.length === 0) return stars;

  const avg = starCount.reduce((pre, curr) => pre + curr, 0) / starCount.length;

  for (let i = 0; i < 5; i++) {
    let percent = 0;

    if (i + 1 <= avg) {
      percent = 100; // ستاره کامل
    } else if (i < avg) {
      // درصد کسری بین 0 تا 100
      const fraction = (avg - i) * 100;

      if (fraction < 25) percent = 0;
      else if (fraction < 50) percent = 25;
      else if (fraction < 75) percent = 50;
      else percent = 75;
    } else {
      percent = 0; // ستاره خالی
    }

    stars.push(<StarSVG key={i} percent={percent} />);
  }

  return stars;
};



    return (
        <div>
            <div className="">
                <img src={image} alt={title} className="" />
            </div>
            <div className="">
                <h3 className="line-clamp-2">{title}</h3>
                <div className="flex">
                    <span className="">{price.toLocaleString()}</span>
                    <span className="">تومان</span>
                </div>
                <div className="">
                    <div className="flex">{renderStars()}</div>
                    <div className="">
                        <button className=""> <CartSVG /> </button>
                        <button className=""> <ArrowLeftRightSVG /> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;