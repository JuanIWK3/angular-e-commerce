import { Component, OnInit } from '@angular/core';
import { ICartItem } from '../interfaces';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: ICartItem[] = JSON.parse(
    localStorage.getItem('cartItems') || '[]'
  ) as ICartItem[];

  total: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.calculateTotal();
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
    if (this.cartItems.length > 0) {
      this.calculateTotal();
    }
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
    if (this.cartItems[i].quantity == 1) {
      this.removeFromCart(i);
    }
  }
}
