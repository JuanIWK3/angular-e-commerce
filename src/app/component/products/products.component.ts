import { Component, OnInit } from '@angular/core';
import { ICartItem, IProduct } from 'src/app/interfaces';
import { productsData } from 'src/app/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = productsData;
  cartItems: ICartItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.cartItems = JSON.parse(
      localStorage.getItem('cartItems') || '[]'
    ) as ICartItem[];
  }

  addCart(i: number) {
    this.cartItems.push({ product: this.products[i], quantity: 1 });
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
}
