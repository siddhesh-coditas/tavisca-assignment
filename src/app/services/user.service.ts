import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = null;
  loginStatus = new Observable();

  constructor() { }

  loginCurrentUser(email): void {
    this.user = email;
    localStorage.setItem('user', email);
  }

  isUserLoggedIn(email): boolean {
    return localStorage.getItem('user') === email;
  }

  lougoutUser(): void {
    localStorage.removeItem('user');
  }

  getUserId() {
    return this.user;
  }

}
