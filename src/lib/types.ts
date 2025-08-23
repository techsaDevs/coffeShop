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
  id: number;
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
  id: number;
  title: string;
  link: string;
}

export interface IHeaderMenu extends IHeaderMenuItemBase {
  Icon?: React.ElementType;
  subMenu?: IHeaderMenuItemBase[];
}

export interface IUser {
  id: number
  username: string
  password: string
  phone: string
  email: string
  role: "admin" | "user"
  basket: IBasket[]
  orders : IOrder[]
  profile?: string; 
}

interface IBasket {
  id: number
  qty : number
}

interface IOrder {
  id: number
  status : "pending" | "rejected" | "sending" | "sent"
  products : IBasket[]
}

export interface IContainer {
  children: ReactNode;
  className?: string;
}