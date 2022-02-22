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

  userDropdown: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.cartItems);
  }

  dropUser() {
    this.userDropdown = !this.userDropdown;
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
  goToProducts() {
    this.router.navigate(['']);
  }
}
