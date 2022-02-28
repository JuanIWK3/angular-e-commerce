import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  email: string = '';
  password: string = '';
  userData: any;

  constructor(private auth: Auth, private provider: GoogleAuthProvider) {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
      }
    });
  }

  googleSignIn() {
    return signInWithPopup(this.auth, this.provider);
  }

  checkLogin() {
    if (localStorage.getItem('user')) {
      return true;
    }
    return false;
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    signOut(this.auth);
    localStorage.removeItem('user');
    document.location.reload();
  }
}
