import { ReactNode } from "react";

export interface Itsxsvg {
  fill?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  onClick?: () => void;
}

export interface IProduct {
  id: number;
  title: string;
  image: string;
  price: number;
  off: number;
  starCount: number;
}

export interface IProductInBasket extends IProduct {
  qty: number;
}

interface IHeaderMenuItemBase {
  id: number;
  title: string;
  link: string;
}

export interface IHeaderMenu extends IHeaderMenuItemBase {
  Icon?: React.ElementType;
  subMenu?: IHeaderMenuItemBase[];
}

export interface IBasket {
  id: number;
  qty: number;
}

export interface IUser {
  id: number;
  username: string;
  email: string;
  phone: string;
  role: string;
  basket: IBasket[];
  profile?: string; 
}