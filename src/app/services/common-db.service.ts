import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../components/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class CommonDbService {

  private baseUrl = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  getAllItems(): any {
    const url = this.baseUrl + 'items';
    return this.http.get(url);
  }

  getSpecificItem(id: string) {
    const url = this.baseUrl + `items/${id}`;
    return this.http.get(url);
  }

  addItem(item) {
    const url = this.baseUrl + `items`;
    return this.http.post(url, item);
  }

  updateItem(item) {
    const url = this.baseUrl + `items/${item.id}`;
    return this.http.put(url, item);
  }

  deleteItemById(id) {
    const url = this.baseUrl + `items/${id}`;
    return this.http.delete(url, id);
  }

  getUserByItem(id: string) {
    const url = this.baseUrl + `users/${id}`;
    return this.http.get(url);
  }

  getUserByEmail(email, password) {
    const url = this.baseUrl + 'users';
    return this.http.get(url, {
      params: {
        email, password
      }
    });
  }

  registerUser(user: UserModel) {
    const url = this.baseUrl + 'users';
    return this.http.post(url, user, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
