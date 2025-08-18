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
  price: number;
  off: number;
  starCount: number;
}