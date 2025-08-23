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

interface IHeaderMenuItemBase {
  id: number;
  title: string;
  link: string;
}

export interface IHeaderMenu extends IHeaderMenuItemBase {
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