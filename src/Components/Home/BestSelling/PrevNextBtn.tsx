"use client";
import React from "react";
import { useSliderStore } from "@/stores/useSliderStore";
import ArrowLeftSVG from "@/Components/SVGs/nav/ArrowLeftSVG";

const SliderControls = () => {
    const swiper = useSliderStore((state) => state.swiper);

    return (
        <div className="flex gap-2">
            <button
                onClick={() => swiper?.slidePrev()}
                className="bg-background w-8 h-8 flexCenter pursor-pointer rounded-full"
            >
                <ArrowLeftSVG className="rotate-180 size-5" />
            </button>
            <button
                onClick={() => swiper?.slideNext()}
                className="bg-background w-8 h-8 flexCenter cursor-pointer rounded-full"
            >
                <ArrowLeftSVG className="size-5" />
            </button>
        </div>
    );
};

export default SliderControls;
