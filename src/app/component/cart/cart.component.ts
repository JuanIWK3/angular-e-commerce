import { Component, OnInit } from '@angular/core';
import { User } from 'firebase/auth';
import { AuthService } from 'src/app/shared/auth.service';
import { FirestoreService } from 'src/app/shared/firestore.service';
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

  user: User = JSON.parse(localStorage.getItem('user')!);

  logged: boolean = false;

  order: any;

  total: number = this.calculateTotal();

  constructor(
    private authService: AuthService,
    private storeService: FirestoreService
  ) {}

  ngOnInit(): void {
    if (this.authService.checkLogin()) {
      this.logged = true;
    } else {
      this.logged = false;
    }
  }

  buy() {
    let data = new Date();
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear();
    let dataAtual = dia + '/' + mes + '/' + ano;

    console.log(dataAtual);

    this.order = {
      products: this.cartItems,
      total: this.total,
      data: dataAtual,
    };

    if (this.user.email) {
      this.storeService.addOrder(this.user.email, this.order);
    }

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
