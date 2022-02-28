import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  login() {
    this.error = '';

    if (!this.authService.login(this.email, this.password)) {
      this.error = 'Login failed';
    }
  }

  forgotPassword() {}
}
