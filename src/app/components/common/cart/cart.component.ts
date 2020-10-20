import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartService } from 'src/app/services/cart.service';
import { CommonDbService } from 'src/app/services/common-db.service';
import { ItemCardModel } from '../../item/item-card/item-card.model';
import { CartState, GetItems } from './state/cart-action';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: ItemCardModel[] = [];
  showTotal = false;

  constructor(
    private cartService: CartService,
    private dbService: CommonDbService,
    private store: Store<CartState>
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.showTotal = true;
    this.store.select(state => state.allItems).subscribe((data: any) => {
      this.cartItems = data.allItems.map((elem) => {
        return { ...elem, cartView: true };
      });;
    });
  }

  closeCart() {
    this.cartService.closeCart();
  }

  getTotalCartPrice() {
    return this.cartItems.length ? this.cartItems.map((e) => { return Number(e.price) })
      .reduce((e, n) => e + n) : 0
  }
}
