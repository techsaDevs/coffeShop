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

export interface IUser {
  id: string;
  username: string;
  password: string;
  phone: string;
  email: string;
  role: "admin" | "user";
  basket: IBasket[];
  orders : IOrder[];
  profile?: string;
}

interface IBasket {
  id: string
  qty : number
}

interface IOrder {
  id: string
  status : "pending" | "rejected" | "sending" | "sent"
  products : IBasket[]
}

export interface IContainer {
  children: ReactNode;
  className?: string;
}

export interface ICategorys {
    id: string
    title: string;
    image: string;
    link: string;
}