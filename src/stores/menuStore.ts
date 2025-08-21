import { create } from "zustand";
import axiosInst from "@/lib/axiosConfig";
import { toast } from "react-toastify";
import { IHeaderMenu } from "@/lib/types";
import { AxiosError } from "axios";

interface MenuState {
  menu: IHeaderMenu[];
  loading: boolean;
  getMenu: () => Promise<void>;
}

export const defaultMenu: IHeaderMenu[] = [
  { id: 1, title: "صفحه اصلی", link: "/" },
  { id: 2, title: "فروشگاه", link: "/#" },
  { id: 3, title: "دیکشنری", link: "/#" },
  { id: 4, title: "بلاگ", link: "/#" },
  { id: 5, title: "درباره ما", link: "/#" },
  { id: 6, title: "تماس با ما", link: "/#" },
];

export const useMenuStore = create<MenuState>((set) => ({
  menu: defaultMenu, 
  loading: true,
  getMenu: async () => {
    set({ loading: true });
    try {
      const { data } = await axiosInst.get("/headerMenu");
      set({ menu: data });
    } catch (err) {
      const error = err as AxiosError;
      toast.error("مشکلی در دریافت منو پیش آمد!", { position: "bottom-right" });
      console.error("خطا در دریافت منو:", error);
    } finally {
      set({ loading: false });
    }
  },
}));
