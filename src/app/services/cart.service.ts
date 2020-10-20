import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartVisible = false;

  constructor() {}

  getCartVisibilityStatus() {
    return this.cartVisible;
  }

  toggleCartVisibilityStatus() {
    this.cartVisible = !this.cartVisible;
  }

  closeCart() {
    this.cartVisible = false;
  }
}
