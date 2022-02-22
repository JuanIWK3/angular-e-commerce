export interface IProduct {
  name: string;
  imageUrl: string;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}
