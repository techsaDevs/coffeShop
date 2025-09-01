import { create } from "zustand";
import { IUser } from "@/lib/types";

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
    id: "2",
    username: "mohammad",
    password: "mohammad123",
    email: "mohammad@gmail.com",
    phone: "09124577865",
    role: "admin",
    basket: [
      {id: "1" , qty: 2},
      {id: "4" , qty: 5},
      {id: "3" , qty: 3}
    ],
    orders: [],
    score: 55,
  },

  setIsLoggedin: (value) => set({ isLoggedin: value }),
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  setIsDesktop: (value) => set({ isDesktop: value }),
  setUser: (user) => set({ user, isLoggedin: true }),
  logout: () => set({ user: null, isLoggedin: false, isOpen: false }),
}));