import { create } from "zustand";
import axiosInst from "@/lib/axiosConfig";
import { toast } from "react-toastify";
import { IHeaderMenu } from "@/lib/types";
import { AxiosError } from "axios";
import { HomeSVG } from "@/Components/SVGs";
import { BriefcaseSVG } from "@/Components/SVGs";
import { ChatBubbleSVG } from "@/Components/SVGs";
import { DocumentTestSVG } from "@/Components/SVGs";
import { PhoneArrowUpRightSVG } from "@/Components/SVGs";
import { CartSVG } from "@/Components/SVGs";

interface MenuState {
  menu: IHeaderMenu[];
  loading: boolean;
  getMenu: () => Promise<void>;
}

export const iconsMap: Record<number, React.ElementType> = {
  1: HomeSVG,
  2: CartSVG,
  3: ChatBubbleSVG,
  4: DocumentTestSVG,
  5: BriefcaseSVG,
  6: PhoneArrowUpRightSVG,
};

export const defaultMenu: IHeaderMenu[] = [
  { id: "1", title: "صفحه اصلی", link: "/" },
  { id: "2", title: "فروشگاه", link: "/#" },
  { id: "3", title: "دیکشنری", link: "/#" },
  { id: "4", title: "بلاگ", link: "/#" },
  { id: "5", title: "درباره ما", link: "/#" },
  { id: "6", title: "تماس با ما", link: "/#" },
];

export const useMenuStore = create<MenuState>((set) => ({
  menu: defaultMenu,
  loading: true,
  getMenu: async () => {
    set({ loading: true });
    try {
      const { data } = await axiosInst.get("/headerMenu");
      const menuWithIcons = data.map((item: IHeaderMenu) => ({
        ...item,
        Icon: iconsMap[+item.id],
      }));

      set({ menu: menuWithIcons });
    } catch (err) {
      const error = err as AxiosError;
      toast.error("مشکلی در دریافت منو پیش آمد!", { position: "bottom-right" });
      console.error("خطا در دریافت منو:", error);
    } finally {
      set({ loading: false });
    }
  },
}));
