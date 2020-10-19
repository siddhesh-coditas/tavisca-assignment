import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonDbService {

  private baseUrl = "http://localhost:3000/"

  constructor(private http: HttpClient) {}

  getAllItems() {
    const url = this.baseUrl + "items";
    return this.http.get(url);
  }

  getSpecificItem(id: number) {
    const url = this.baseUrl + `items/${id}`;
    return this.http.get(url);
  }
}
