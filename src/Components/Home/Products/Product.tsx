import React from 'react';
import { IProduct } from '@/lib/types';
import ArrowLeftRightSVG from '@/Components/SVGs/home/products/ArrowLeftRightSVG';
import RenderStar from './RenderStar';
import AddProduct from './AddProduct';

const Product = ({ id, title, image, price, off, count, starCount }: IProduct) => {
    return (
        <div className='bg-background rounded-2xl h-[467px] flex flex-col'>
            <div>
                <img src={image} alt={title} className="w-full rounded-t-2xl" />
            </div>

            <div className="px-4 py-3 flex flex-col justify-between flex-1">
                {/* عنوان + قیمت */}
                <div>
                    <h3 className="line-clamp-2 font-dana-medium text-lg">{title}</h3>
                </div>

                {/* دکمه‌ها + ستاره‌ها */}
                <div className="">
                    <div className="flex items-center gap-1 text-hoverBasket-green my-2">
                        <span className="font-dana-dbold text-lg">{price.toLocaleString()}</span>
                        <span className="font-dana text-sm">تومان</span>
                    </div>
                    <div className='flex items-center justify-between mt-auto'>

                    <div className="flex gap-2">
                        <AddProduct id={id} />
                        <button className="">
                            <ArrowLeftRightSVG />
                        </button>
                    </div>
                    <RenderStar starCount={starCount} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;