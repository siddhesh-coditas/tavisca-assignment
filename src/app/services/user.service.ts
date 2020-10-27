import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserModel } from '../components/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = null;
  loginStatus = new Observable((observer) => {
    observer.next(this.getUserData() !== null);
    return {
      unsubscribe() { }
    };
  });

  constructor() { }

  loginCurrentUser(data): void {
    this.storeUserData(data);
  }

  storeUserData(data) {
    this.user = data;
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  isUserLoggedIn(email): boolean {
    return localStorage.getItem('user') === email;
  }

  lougoutUser(): void {
    this.user = null;
    localStorage.removeItem('user');
  }

  getUserData(): UserModel | null {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (this.user === null && storedUser !== null) {
      this.user = storedUser;
    }
    return this.user;
  }

}
