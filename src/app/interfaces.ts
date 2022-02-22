export interface IProduct {
  name: string;
  price: number;
  imageUrl: string;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}
