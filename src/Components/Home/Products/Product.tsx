import React from 'react';
import { IProduct } from '@/lib/types';
import { ArrowLeftRightSVG } from "@/Components/SVGs";
import RenderStar from './RenderStar';
import AddProduct from './AddProduct';
import Link from 'next/link';
import OffBox from '@/Components/OffBox';

const Product = ({ id, title, image, price, off, count, starCount }: IProduct) => {
    let finalPrice: number = price
    if (count > 0) {
        if (off > 0) {
            const cashOff = (price * off) / 100
            finalPrice = Math.round((price - cashOff) / 1000) * 1000
        }
    }

    const linkProduct = `/products/${id}`

    return (
        <div className='bg-background text-foreground rounded-2xl h-[360px] sm:h-[430px] md:h-[410px] lg:h-[460px] flex flex-col'>
            <Link href={linkProduct} className='relative'>
                <img src={image} alt={title} className="w-full rounded-t-2xl" />
                {
                    count > 0 ? (
                        <>
                            { off > 0 ? ( <OffBox off={off} /> ) : null }
                        </>
                    ) : null
                }
            </Link>

            <div className="p-2.5 md:px-4 md:py-3 flex xs:justify-baseline flex-col justify-between flex-1">
                <div>
                    <Link href={linkProduct} className="line-clamp-2 font-dana-medium text-sm md:text-lg">{title}</Link>
                </div>

                <div>
                    <div className="mb-2 flex items-center gap-1.5">
                        {
                            count > 0 ? ( <> {
                                        off > 0 ? (
                                            <>
                                                <div className='flex items-center gap-1 text-hoverBasket-green'>
                                                    <span className="font-dana-dbold text-sm md:text-lg">{finalPrice.toLocaleString()}</span>
                                                    <span className="font-dana text-xs">تومان</span>
                                                </div>
                                                <div className={`
                                                    flex items-center gap-0.5 md:gap-1 opacity-50 relative
                                                     before:content-[""] before:absolute
                                                      before:bg-rose-500 before:h-px md:before:h-0.5
                                                      before:top-2 md:before:top-2.5 before:w-full  
                                                `}>
                                                    <span className="font-dana-dbold text-[13px] md:text-lg">{price.toLocaleString()}</span>
                                                    <span className="font-dana text-[11px]">تومان</span>
                                                </div>
                                            </>
                                        ) : (
                                            <div className='flex items-center gap-1 text-hoverBasket-green'>
                                                <span className="font-dana-dbold text-lg">{price.toLocaleString()}</span>
                                                <span className="font-dana text-sm">تومان</span>
                                            </div>
                                        )
                                    } </> ) : (<span className="font-dana-dbold text-base md:text-lg text-rose-400">فعلا موجود نیست !</span>)
                        }
                    </div>
                    <div className='flex items-center justify-between mt-auto'>

                        <div className="flex items-center gap-2">
                            <AddProduct id={id} />
                            <button className="w-4 h-4 hidden md:block">
                                <ArrowLeftRightSVG className='w-full h-full' />
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