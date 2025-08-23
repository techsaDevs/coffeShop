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
  isLoggedin: false,
  isOpen: false,
  isDesktop: false,
  user: null,

  setIsLoggedin: (value) => set({ isLoggedin: value }),
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  setIsDesktop: (value) => set({ isDesktop: value }),
  setUser: (user) => set({ user, isLoggedin: true }),
  logout: () => set({ user: null, isLoggedin: false, isOpen: false }),
}));