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
  userData: any;
  isLoggedIn: boolean = false;

  constructor(private auth: Auth, private router: Router) {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  checkLogin() {
    return this.isLoggedIn;
  }

  login(email: string, password: string): boolean {
    signInWithEmailAndPassword(this.auth, email, password).then(
      () => {
        this.router.navigate(['']);
        return true;
      },
      (err) => {
        return false;
      }
    );
    return false;
  }

  register(email: string, password: string): boolean {
    createUserWithEmailAndPassword(this.auth, email, password).then(
      () => {
        this.router.navigate(['login']);
        return true;
      },
      (err) => {
        return false;
      }
    );
    return false;
  }

  logout() {
    signOut(this.auth);
    localStorage.removeItem('user');
    document.location.reload();
  }
}
