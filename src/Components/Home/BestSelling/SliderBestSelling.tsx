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
      spaceBetween={30}
      slidesPerView={4}
      onSwiper={setSwiper} // اینجا instance رو در استور ذخیره می‌کنیم
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="rounded-xl"
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
    >
      {serverProducts.map((productJSX, idx) => (
        <SwiperSlide key={idx}>{productJSX}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderBestSelling;
