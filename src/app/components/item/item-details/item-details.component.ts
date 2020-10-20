import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CommonDbService } from 'src/app/services/common-db.service';
import { LocalServiceService } from 'src/app/services/local-service.service';
import { AddToCart } from '../../common/cart/state/cart-action';
import { ItemCardModel } from '../item-card/item-card.model';

interface CartState {
  item: ItemCardModel
}

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  @Input()
  item: ItemCardModel = {
    "id": 0,
    "name": "Gorgeous Soft Computer",
    "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    "imgUrl": "http://placeimg.com/640/480/abstract",
    "price": "795.00",
    "cartView": false
  };

  itemId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private commonDb: CommonDbService,
    public locService: LocalServiceService,
    private store: Store<CartState>
  ) {

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
    this.store.dispatch(AddToCart({item: this.item}));
  }

}
