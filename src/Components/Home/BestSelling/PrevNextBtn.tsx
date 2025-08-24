"use client";
import React from "react";
import { useSliderStore } from "@/stores/useSliderStore";
import ArrowLeftSVG from "@/Components/SVGs/nav/ArrowLeftSVG";

const SliderControls = () => {
    const swiper = useSliderStore((state) => state.swiper);

    return (
        <div className="flex gap-x-3 md:gap-x-[18px]">
            <button
                onClick={() => swiper?.slidePrev()}
                className="prevNextBestSellbtn"
            >
                <ArrowLeftSVG className="rotate-180 size-5" />
            </button>
            <button
                onClick={() => swiper?.slideNext()}
                className="prevNextBestSellbtn " 
            >
                <ArrowLeftSVG className="size-5" />
            </button>
        </div>
    );
};

export default SliderControls;
