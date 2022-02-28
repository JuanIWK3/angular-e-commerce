import { Component, Input, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { User } from 'firebase/auth';
import { ICartItem } from 'src/app/interfaces';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() cartItems: ICartItem[] = [];

  storedTheme: string = localStorage.getItem('theme') || '';
  isDarkTheme: boolean = false;

  user: User = JSON.parse(localStorage.getItem('user')!);

  userDropdown: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    if (this.storedTheme === 'dark') {
      this.isDarkTheme = true;
      document.body.classList.add('dark-theme');
    } else {
      this.isDarkTheme = false;
      document.body.classList.remove('dark-theme');
    }
  }

  setTheme(event: MatSlideToggleChange): void {
    if (event.checked) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }

  logout() {
    this.authService.logout();
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
