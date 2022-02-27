import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICartItem } from 'src/app/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() cartItems: ICartItem[] = [];

  user: boolean = localStorage.getItem('user') ? true : false;

  userDropdown: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  dropUser() {
    this.userDropdown = !this.userDropdown;
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
  goToProducts() {
    this.router.navigate(['']);
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
  goToRegister() {
    this.router.navigate(['/register']);
  }
  goToOrders() {
    this.router.navigate(['/orders']);
  }
}
