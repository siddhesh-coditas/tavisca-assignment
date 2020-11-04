import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CommonDbService } from 'src/app/services/common-db.service';
import { UserService } from 'src/app/services/user.service';
import { LocalServiceService } from '../../../services/local-service.service';
import { CartState, DeleteItem } from '../../common/cart/state/cart-action';
import { ItemCardModel } from './item-card.model';

declare var $: any;

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() item: ItemCardModel;
  isAllItem = false;

  @Input() id;
  @Input() cartView = false;
  @Input() imgUrl = '';
  @Input() name = '';
  @Input() description = '';
  @Input() price = '';

  constructor(
    public locService: LocalServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private store: Store<CartState>,
    private commonDb: CommonDbService
  ) {
    this.validateLoggedInUser();
    this.isAllItem = this.route.snapshot.paramMap.get('listMode') === 'all';
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
    const user = this.userService.getUserData();
    if (user === null) {
      this.router.navigateByUrl('login');
    }
  }

  onUpdate(): void {
    this.router.navigateByUrl(`item/${this.item.id}/edit`);
  }

  onDelete(): void {
    this.commonDb.deleteItemById(this.item.id).subscribe(() => {
      this.router.navigateByUrl('home');
    });
  }

  addItemToUser(event): void {
    event.stopImmediatePropagation();
    const userData = this.userService.getUserData();
    userData.items.push(this.item.id);
    this.item.userAccess = userData.id;
    this.commonDb.updateUser(userData).subscribe((user) => {
      this.userService.storeUserData(user);
      this.commonDb.updateItem(this.item).subscribe(() => {
        this.router.navigateByUrl('home');
      });
    });
  }

}
