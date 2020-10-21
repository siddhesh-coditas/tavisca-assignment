import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CommonDbService } from 'src/app/services/common-db.service';
import { LocalServiceService } from 'src/app/services/local-service.service';
import { UserService } from 'src/app/services/user.service';
import { AddToCart, CartState } from '../../common/cart/state/cart-action';
import { UserModel } from '../../user/user.model';
import { ItemCardModel } from '../item-card/item-card.model';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  @Input()
  item: ItemCardModel;

  itemId: string;
  private userId;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private commonDb: CommonDbService,
    public locService: LocalServiceService,
    private store: Store<CartState>
  ) {
    this.validateLoggedInUser();
  }

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id');
    this.commonDb.getSpecificItem(this.itemId).subscribe((data: ItemCardModel) => {
      this.item = data;
    });
  }

  redirectToListing() {
    this.router.navigateByUrl('home')
  }

  additemToCart() {
    this.store.dispatch(AddToCart({ item: this.item }));
  }

  validateLoggedInUser(): void {
    const user = this.userService.getUserId();
    if (user === null) {
      this.router.navigateByUrl('login');
    }
  }

}
