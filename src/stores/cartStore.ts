import { create } from "zustand";
import axiosInst from "@/lib/axiosConfig";
import { IBasket, IProduct, IProductInBasket } from "@/lib/types";
import { useAuthStore } from "./authStore";

interface CartState {
  productsInBasket: IProductInBasket[];
  finalTotal: number;
  isOpen: boolean;
  fetchProducts: () => Promise<void>;
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
  toggleCart: (open: boolean) => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  productsInBasket: [],
  finalTotal: 0,
  isOpen: false,

  fetchProducts: async () => {
    const authUser = useAuthStore.getState().user;
    if (!authUser?.basket.length) return;

    try {
      const response = await axiosInst("/products");
      const products: IProduct[] = response.data;

      const filteredProducts = products.filter(product =>
        authUser.basket.some(item => +item.id === Number(product.id))
      );

      const productsWithQty = filteredProducts.map(product => {
        const basketItem = authUser.basket.find(item => +item.id === Number(product.id));
        return { ...product, qty: basketItem?.qty || 0 };
      });

      const total = productsWithQty.reduce((sum, product) => {
        const finalPrice = product.price - ((product.price * (product.off || 0)) / 100);
        return sum + finalPrice * (product.qty || 1);
      }, 0);

      set({ productsInBasket: productsWithQty, finalTotal: total });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },

  increaseQty: (id) => {
    const authStore = useAuthStore.getState();
    const basket = authStore.user?.basket || [];

    const updatedBasket: IBasket[] = basket.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );

    useAuthStore.setState({
      user: authStore.user ? { ...authStore.user, basket: updatedBasket } : null
    });

    get().fetchProducts();
  },

  decreaseQty: (id) => {
    const authStore = useAuthStore.getState();
    const basket = authStore.user?.basket || [];

    const updatedBasket: IBasket[] = basket.map(item =>
      item.id === id ? { ...item, qty: Math.max(item.qty - 1, 1) } : item
    );

    useAuthStore.setState({
      user: authStore.user ? { ...authStore.user, basket: updatedBasket } : null
    });

    get().fetchProducts();
  },

  toggleCart: (open) => set({ isOpen: open }),
}));