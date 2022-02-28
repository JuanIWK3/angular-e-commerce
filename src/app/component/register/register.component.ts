import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  checkPassword(): void {
    if (this.password !== this.passwordConfirm) {
      this.error = 'Passwords do not match';
    } else {
      this.error = '';
    }
  }

  googleSignIn() {
    this.authService.googleSignIn();
  }

  async register() {
    if (this.password !== this.passwordConfirm) {
      return;
    }

    try {
      this.error = '';
      await this.authService.register(this.email, this.password);
      this.authService.login(this.email, this.password);
      this.router.navigate(['']);
    } catch (error) {
      this.error = 'Failed to register';
    }
  }
}
