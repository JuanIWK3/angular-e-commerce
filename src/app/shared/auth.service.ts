import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  email: string = '';
  password: string = '';

  constructor(private auth: Auth, private router: Router) {}

  login(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password).then(
      () => {
        localStorage.setItem('token', 'true');
        this.router.navigate(['']);
      },
      (err) => {
        console.log(err);
        this.router.navigate(['login']);
      }
    );
  }

  register(email: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password).then(() => {
      this.router.navigate(['login']);
    });
  }

  logout() {
    signOut(this.auth);
  }
}
