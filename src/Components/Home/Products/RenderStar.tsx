"use client"
import React, { JSX, useEffect } from 'react';
import StarSVG from '@/Components/SVGs/home/products/StarSVG';

interface IRenderStar {
    starCount: number[]
}

const RenderStar = ({ starCount }: IRenderStar) => {


    const renderStars = (): JSX.Element[] => {
        const stars: JSX.Element[] = [];

        if (!starCount || starCount.length === 0) return stars;

        const avg = starCount.reduce((pre, curr) => pre + curr, 0) / starCount.length;

        for (let i = 0; i < 5; i++) {
            let percent = 0;

            if (i + 1 <= avg) {
                percent = 100;
            } else if (i < avg) {

                const fraction = (avg - i) * 100;

                if (fraction < 25) percent = 0;
                else if (fraction < 50) percent = 25;
                else if (fraction < 75) percent = 50;
                else percent = 75;
            } else {
                percent = 0; 
            }

            stars.push(<StarSVG key={i} percent={percent} />);
        }

        return stars;
    };

    return (
        <div className="flex">{renderStars()}</div>
    );
};

export default RenderStar;