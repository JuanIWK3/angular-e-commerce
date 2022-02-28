import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  async googleSignIn() {
    try {
      this.error = '';
      await this.authService.googleSignIn();
      this.router.navigate(['']);
    } catch (error) {
      this.error = 'Failed to login';
    }
  }

  async login() {
    try {
      this.error = '';
      await this.authService.login(this.email, this.password);
      this.router.navigate(['']);
    } catch (error) {
      this.error = 'Failed to login';
    }
  }

  forgotPassword() {}
}
