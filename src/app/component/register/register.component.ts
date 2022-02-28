import { Component, OnChanges, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  email: string = '';
  password: string = '';
  passwordConfirm: string = '';
  error: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  checkPassword(): void {
    console.log('change');

    if (this.password !== this.passwordConfirm) {
      this.error = 'Passwords do not match';
    } else {
      this.error = '';
    }
  }

  register() {
    if (this.password !== this.passwordConfirm) {
      return;
    }

    this.error = '';

    if (!this.authService.register(this.email, this.password)) {
      this.error = 'Failed to register';
    }
  }
}
