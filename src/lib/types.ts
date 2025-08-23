import { ReactNode } from "react";

export interface Itsxsvg {
  fill?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  onClick?: () => void;
}

export type startCountArr =  1 | 2 | 3 | 4 | 5

export interface IProduct {
  id: string;
  title: string;
  image: string;
  price: number;
  off: number;
  count: number;
  starCount: startCountArr[];
}

export interface IProductInBasket extends IProduct {
  qty: number;
}

interface IHeaderMenuItemBase {
  id: string;
  title: string;
  link: string;
}

export interface IHeaderMenu extends IHeaderMenuItemBase {
  Icon?: React.ElementType;
  subMenu?: IHeaderMenuItemBase[];
}

export interface IBasket {
  id: string;
  qty: number;
}

export interface IUser {
  id: string;
  username: string;
  email: string;
  phone: string;
  role: "admin" | "user";
  basket: IBasket[];
  profile?: string; 
}

export interface IContainer {
  children: ReactNode;
  className?: string;
}