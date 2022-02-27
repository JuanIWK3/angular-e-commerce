import { Component, OnInit } from '@angular/core';
import { ICartItem, IOrder, IProduct } from '../../interfaces';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: ICartItem[] = JSON.parse(
    localStorage.getItem('cartItems') || '[]'
  ) as ICartItem[];

  orders: IOrder[] = [];

  total: number = this.calculateTotal();

  constructor() {}

  ngOnInit(): void {
    this.orders = JSON.parse(localStorage.getItem('orders')!);
    if (this.orders === null) {
      this.orders = [];
    }
  }

  buy() {
    let data = new Date();

    this.orders.push({
      products: this.cartItems,
      total: this.total,
      data: data,
    });
    localStorage.setItem('orders', JSON.stringify(this.orders));
    localStorage.removeItem('cartItems');
    this.cartItems = [];
  }

  calculateTotal() {
    this.total = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      this.total +=
        this.cartItems[i].product.price * this.cartItems[i].quantity;
    }
    return this.total;
  }

  removeFromCart(i: number) {
    this.cartItems.splice(i, 1);
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    this.calculateTotal();
  }

  addQuantity(i: number) {
    this.cartItems[i].quantity += 1;
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    this.total += this.cartItems[i].product.price;
  }
  subtractQuantity(i: number) {
    this.cartItems[i].quantity -= 1;
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    this.total -= this.cartItems[i].product.price;
    if (this.cartItems[i].quantity == 0) {
      this.removeFromCart(i);
    }
  }
}
