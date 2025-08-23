import React from 'react';
import { IProduct } from '@/lib/types';
import ArrowLeftRightSVG from '@/Components/SVGs/home/products/ArrowLeftRightSVG';
import RenderStar from './RenderStar';
import AddProduct from './AddProduct';

const Product = ({ id, title, image, price, off, count, starCount }: IProduct) => {
    let finalPrice: number = price
    if (count > 0) {
        if (off > 0){
            const cashOff = (price * off) / 100
            finalPrice = Math.round((price - cashOff) / 1000) * 1000
        }
    }
    return (
        <div className='bg-background rounded-2xl lg:h-[467px] flex flex-col'>
            <div className='relative'>
                <img src={image} alt={title} className="w-full rounded-t-2xl" />
                {
                    count > 0 ? (
                        <>
                            {
                                off > 0 ? (
                                    <div className='absolute top-6 right-5 bg-orange-300 text-white rounded-full px-3 h-7 flexCenter'>
                                        <span className='block -mb-1'>{off}%</span>
                                    </div>
                                ) : null
                            }
                        </>
                    ) : null
                }
            </div>

            <div className="px-4 py-3 flex flex-col justify-between flex-1">
                <div>
                    <h3 className="line-clamp-2 font-dana-medium text-base md:text-lg">{title}</h3>
                </div>

                <div className="">
                    <div className="my-2 flex items-center gap-1.5 md:gap-3">
                        {
                            count > 0 ? (
                                <>
                                    {
                                        off > 0 ? (
                                            <>
                                                <div className='flex items-center gap-1 text-hoverBasket-green'>
                                                    <span className="font-dana-dbold text-base md:text-lg">{finalPrice.toLocaleString()}</span>
                                                    <span className="font-dana text-sm">تومان</span>
                                                </div>
                                                <div className={`
                                                    flex items-center gap-0.5 md:gap-1 opacity-50 relative
                                                     before:content-[""] before:absolute
                                                      before:bg-rose-500 before:h-px md:before:h-0.5
                                                      before:top-2 md:before:top-2.5 before:w-full  
                                                `}>
                                                    <span className="font-dana-dbold text-sm md:text-lg">{price.toLocaleString()}</span>
                                                    <span className="font-dana text-xs">تومان</span>
                                                </div>
                                            </>
                                        ) : (
                                            <div className='flex items-center gap-1 text-hoverBasket-green'>
                                                <span className="font-dana-dbold text-lg">{price.toLocaleString()}</span>
                                                <span className="font-dana text-sm">تومان</span>
                                            </div>
                                        )
                                    }
                                </>
                            ) : (<span className="font-dana-dbold text-base md:text-lg text-rose-400">فعلا موجود نیست !</span>)
                        }
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