import { Component } from '@angular/core';
import { BaseComp } from './components/base';
import { CartService } from './services/cart.service';
import { LocalServiceService } from './services/local-service.service';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComp {
  constructor(
    private cartService: CartService,
    private locServ: LocalServiceService
  ) {
    super(locServ);
  }

  isCartVisible() {
    return this.cartService.getCartVisibilityStatus();
  }
}
