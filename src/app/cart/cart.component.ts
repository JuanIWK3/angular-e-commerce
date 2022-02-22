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

  constructor() {}

  ngOnInit(): void {}

  removeCart(i: number) {
    this.cartItems.splice(i, 1);
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  addQuantity(i: number) {
    this.cartItems[i].quantity += 1;
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
  subtractQuantity(i: number) {
    this.cartItems[i].quantity -= 1;
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
}
