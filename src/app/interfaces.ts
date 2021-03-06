export interface IProduct {
  name: string;
  price: number;
  imageUrl: string;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}
export interface IOrder {
  products: ICartItem[];
  total: number;
  data: Date;
}
