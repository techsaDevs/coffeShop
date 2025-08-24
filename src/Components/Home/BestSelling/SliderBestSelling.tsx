"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useSliderStore } from "@/stores/useSliderStore";

interface SliderProps {
  serverProducts: React.ReactNode[];
}

const SliderBestSelling: React.FC<SliderProps> = ({ serverProducts }) => {
  const setSwiper = useSliderStore((state) => state.setSwiper);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={4}
      onSwiper={setSwiper} // اینجا instance رو در استور ذخیره می‌کنیم
      autoplay={{ delay: 10000, disableOnInteraction: false }}
      className="rounded-xl"
      breakpoints={{
        280: { slidesPerView: 2 , spaceBetween: 14 },
        768: { slidesPerView: 3 , spaceBetween: 20 },
        1024: { slidesPerView: 4 , spaceBetween: 20 },
      }}
    >
      {serverProducts.map((productJSX, idx) => (
        <SwiperSlide key={idx}>{productJSX}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderBestSelling;
