export interface Itsxsvg {
  fill?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  onClick?: () => void;
}

export interface IProduct {
  id: string;
  title: string;
  image: string;
  price: number;
  off: number;
  starCount: number;
}

interface IHeaderMenuItemBase {
  id: string;
  title: string;
  link: string;
}

export interface IHeaderMenu extends IHeaderMenuItemBase {
  subMenu?: IHeaderMenuItemBase[];
<<<<<<< HEAD
=======
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
>>>>>>> f97a0bf (refacor all id: number; to id: string;)
}