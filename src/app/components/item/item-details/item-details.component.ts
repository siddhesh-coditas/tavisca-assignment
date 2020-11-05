import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CommonDbService } from 'src/app/services/common-db.service';
import { LocalServiceService } from 'src/app/services/local-service.service';
import { UserService } from 'src/app/services/user.service';
import { AddToCart, CartState } from '../../common/cart/state/cart-action';
import { ItemCardModel } from '../item-card/item-card.model';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {
  @Input()
  item: ItemCardModel;

  itemId: string;

  @Input()
  isUpdateMode = false;

  updateForm: FormGroup;
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
    this.updateForm = new FormGroup({
      name: new FormControl(null, []),
      description: new FormControl(null, []),
      price: new FormControl(null, []),
    });
  }

  ngOnInit(): void {
    if(!this.item) {
      this.itemId = this.route.snapshot.paramMap.get('id');
      this.isUpdateMode = this.route.snapshot.paramMap.get('isUpdateMode') === 'edit';
      this.commonDb.getSpecificItem(this.itemId).subscribe(
        (data: ItemCardModel) => {
          this.item = data;
          if (this.isUpdateMode) {
            this.updateProduct();
          }
        },
        (err) => {
          if (err.status === 404) {
            this.router.navigateByUrl('home');
          }
        }
      );
    } else {
      this.itemId = this.item.id.toString();
    }
  }

  redirectToListing(): void {
    this.router.navigateByUrl('home');
  }

  additemToCart(): void {
    this.store.dispatch(AddToCart({ item: this.item }));
  }

  validateLoggedInUser(): void {
    const user = this.userService.getUserData();
    if (user === null) {
      this.router.navigateByUrl('login');
    }
  }

  updateProduct(): void {
    this.updateForm = new FormGroup({
      name: new FormControl(this.item.name, []),
      description: new FormControl(this.item.description, []),
      price: new FormControl(this.item.price, []),
    });
    this.isUpdateMode = true;
  }

  onUpdate(): void {
    const updatedData = this.updateForm.value;
    this.item = {
      ...this.item,
      name: updatedData.name,
      description: updatedData.description,
      price: Number(updatedData.price).toFixed(2),
      imgUrl: this.item.imgUrl,
    };
    this.commonDb.updateItem(this.item).subscribe((data: ItemCardModel) => {
      this.isUpdateMode = false;
    });
  }

  deleteItem(): void {
    const userData = { ...this.userService.getUserData() };
    this.item.userAccess = null;
    userData.items = userData.items.filter((id) => id !== this.item.id);
    this.commonDb.updateUser(userData).subscribe(() => {
      this.userService.storeUserData(userData);
      this.commonDb.updateItem(this.item).subscribe(() => {
        this.router.navigateByUrl('home');
      });
    });
  }

  isBtnVisible(): boolean {
    const userData = this.userService.getUserData();
    return userData && this.item.userAccess === userData.id;
  }
}
