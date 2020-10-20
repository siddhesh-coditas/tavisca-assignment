import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CommonDbService } from 'src/app/services/common-db.service';
import { ItemCardModel } from '../../item/item-card/item-card.model';

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
    private dbService: CommonDbService
  ) { }

  ngOnInit(): void {
    // this.dbService.getAllItems().subscribe((data: ItemCardModel[]) => {
    //   this.cartItems = data.splice(0, 3).map((elem) => {
    //     return { ...elem, cartView: true };
    //   });

    // })
  }

  ngAfterViewInit() {
    this.showTotal = true;
  }

  closeCart() {
    this.cartService.closeCart();
  }

  getTotalCartPrice() {
    return this.cartItems.length ? this.cartItems.map((e) => { return Number(e.price) })
      .reduce((e, n) => e + n) : 0
  }
}
