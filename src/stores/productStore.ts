import { create } from "zustand";
import { IProduct, IProductInBasket } from "@/lib/types";

interface ProductState {
  products: IProduct[];
  basket: IProductInBasket[];
  setProducts: (products: IProduct[]) => void;
  addToBasket: (product: IProduct) => void;
  removeFromBasket: (id: number) => void;
  changeQty: (id: number, qty: number) => void;
  clearBasket: () => void;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  basket: [],

  setProducts: (products) => set({ products }),

  addToBasket: (product) =>
    set((state) => {
      const existing = state.basket.find((p) => p.id === product.id);
      if (existing) {
        return {
          basket: state.basket.map((p) =>
            p.id === product.id ? { ...p, qty: p.qty + 1 } : p
          ),
        };
      }
      return { basket: [...state.basket, { ...product, qty: 1 }] };
    }),

  removeFromBasket: (id) =>
    set((state) => ({
      basket: state.basket.filter((p) => p.id !== id),
    })),

  changeQty: (id, qty) =>
    set((state) => ({
      basket: state.basket.map((p) =>
        p.id === id ? { ...p, qty } : p
      ),
    })),

  clearBasket: () => set({ basket: [] }),
}));