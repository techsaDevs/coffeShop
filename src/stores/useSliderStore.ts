// store/useSliderStore.ts
import { create } from "zustand";
import { Swiper } from "swiper/types";

interface SliderState {
  swiper: Swiper | null;
  setSwiper: (swiper: Swiper) => void;
}

export const useSliderStore = create<SliderState>((set) => ({
  swiper: null,
  setSwiper: (swiper) => set({ swiper }),
}));