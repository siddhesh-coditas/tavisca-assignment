import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CommonDbService } from 'src/app/services/common-db.service';
import { UserService } from 'src/app/services/user.service';
import { LocalServiceService } from '../../../services/local-service.service';
import { AddToCart, CartState, DeleteItem } from '../../common/cart/state/cart-action';
import { ItemCardModel } from './item-card.model';

declare var $: any;

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() item: ItemCardModel;

  constructor(
    public locService: LocalServiceService,
    private router: Router,
    private userService: UserService,
    private store: Store<CartState>,
    private commonDb: CommonDbService
  ) {
    // this.validateLoggedInUser();
  }

  ngOnInit(): void {

  }

  openItemDetails(): void {
    this.router.navigateByUrl(`item/${this.item.id}`);
  }

  openItemOnKeydown(event): void {
    if ((event.keyCode === 13 || event.keyCode === 32) && !$(event.target).hasClass('cart-del-btn')) {
      this.openItemDetails();
    }
  }

  removeFromCart(event): void {
    event.stopPropagation();
    this.store.dispatch(DeleteItem({ id: this.item.id }));
  }

  validateLoggedInUser(): void {
    const user = this.userService.getUserId();
    if (user === null) {
      this.router.navigateByUrl('login');
    }
  }

  onUpdate() {
    this.router.navigateByUrl(`item/${this.item.id}/true`);
  }

  onDelete() {
    this.commonDb.deleteItemById(this.item.id).subscribe(() => {
      this.router.navigateByUrl('home');
    });
  }

}
