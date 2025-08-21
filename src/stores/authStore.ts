import { create } from "zustand";

export interface IBasketItem {
  id: number;
  qty: number;
}

export interface IUser {
  id: number;
  username: string;
  phone: string;
  email: string;
  profile?: string;
  role: string;
  basket: IBasketItem[];
}

interface AuthState {
  isLoggedin: boolean;
  isOpen: boolean;
  isDesktop: boolean;
  user: IUser | null;
  setIsLoggedin: (value: boolean) => void;
  toggleMenu: () => void;
  setIsDesktop: (value: boolean) => void;
  setUser: (user: IUser) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedin: true,
  isOpen: false,
  isDesktop: false,
  user: {
    id: 1,
    username: "mohammad",
    phone: "09876543210",
    email: "mohammad@gmail.com",
    profile: "",
    role: "admin",
    basket: [
      { id: 1, qty: 4 },
      { id: 2, qty: 3 },
      { id: 3, qty: 2 },
      { id: 4, qty: 1 },
    ],
  },

  setIsLoggedin: (value) => set({ isLoggedin: value }),
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  setIsDesktop: (value) => set({ isDesktop: value }),
  setUser: (user) => set({ user, isLoggedin: true }),
  logout: () => set({ user: null, isLoggedin: false, isOpen: false }),
}));