import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { UserModel } from '../components/user/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user = null;
  loginStatus = false;

  hamBtnVisible: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.hamBtnVisible.subscribe((value) => {
      this.loginStatus = value;
    });
  }

  updateLoginStatus(value) {
    this.hamBtnVisible.next(value);
  }

  loginCurrentUser(data): void {
    this.storeUserData(data);
    this.updateLoginStatus(true);
  }

  storeUserData(data) {
    this.user = data;
    sessionStorage.setItem('user', JSON.stringify(this.user));
  }

  isUserLoggedIn(email): boolean {
    return sessionStorage.getItem('user') === email;
  }

  lougoutUser(): void {
    this.user = null;
    sessionStorage.removeItem('user');
    this.updateLoginStatus(false);
  }

  getUserData(): UserModel | null {
    const storedUser = JSON.parse(sessionStorage.getItem('user'));
    if (this.user === null && storedUser !== null) {
      this.user = storedUser;
    }
    return this.user;
  }
}
