import { Component } from '@angular/core';
import { CartService } from './services/cart.service';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private cartService: CartService) {
  }

  isCartVisible() {
    return this.cartService.getCartVisibilityStatus();
  }
}
