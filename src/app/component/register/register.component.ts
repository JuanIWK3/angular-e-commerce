import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  register() {
    if (this.password !== this.confirmPassword) return;

    this.authService.register(this.email, this.password);
  }
}
