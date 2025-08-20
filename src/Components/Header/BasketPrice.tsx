import React from 'react';

interface IBasketPrice {
    price: number
    off?: number
}

const BasketPrice = ({ off = 0, price }: IBasketPrice) => {
    let disCount = 0
    let finalPrice = price

    if (off > 0) {
        disCount = (price * off) / 100
        finalPrice = price - disCount
    }
    return (
        <div className="space-x-1">
            <span className="font-dana-dbold text-lg">{finalPrice.toLocaleString()}</span>
            <span className="font-dana text-sm">تومان</span>
        </div>
    );
};

export default BasketPrice;