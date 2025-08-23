import { create } from "zustand";

interface IBurgerMenuStore {
  showBarMenu: boolean;
  openSubMenuId: string | null;  // اصلاح شد
  toggleMenu: (open: boolean) => void;
  toggleSubMenu: (id: string) => void;
}


export const useBurgerMenuStore = create<IBurgerMenuStore>((set, get) => ({
  showBarMenu: false,
  openSubMenuId: null,

  toggleMenu: (open) => set({ showBarMenu: open }),
  toggleSubMenu: (id) => set({ 
    openSubMenuId: get().openSubMenuId === id ? null : id 
  }),
}));
