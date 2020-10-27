import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonDbService } from 'src/app/services/common-db.service';
import { UserService } from 'src/app/services/user.service';
import { ItemCardModel } from '../item-card/item-card.model';

@Component({
  selector: 'app-add-iem',
  templateUrl: './add-iem.component.html',
  styleUrls: ['./add-iem.component.scss']
})
export class AddIemComponent implements OnInit {

  addForm: FormGroup;
  private imageUrl = 'https://images-na.ssl-images-amazon.com/images/I/61dwpZr1htL._SL1000_.jpg';

  constructor(
    private router: Router,
    private commonDb: CommonDbService,
    private userService: UserService
  ) {
    this.addForm = new FormGroup({
      name: new FormControl(null, []),
      description: new FormControl(null, []),
      imgUrl: new FormControl(null, []),
      price: new FormControl(null, []),
      userAccess: new FormControl(null, [])
    });
  }

  ngOnInit(): void {
  }

  onAddItem(): void {
    const user = this.userService.getUserData();
    const values = this.addForm.value;
    // values.imgUrl = this.imageUrl;
    values.userAccess = values.userAccess ? user.id : null;
    values.price = Number(values.price).toFixed(2);
    this.commonDb.addItem(values).subscribe((data: ItemCardModel) => {
      if (data.userAccess === user.id) {
        user.items.push(data.id);
        this.commonDb.updateUser(user).subscribe(() => {
          this.redirectToHome();
        });
      } else {
        this.redirectToAllitem();
      }
    });
  }

  onCancel(): void {
    this.redirectToHome();
  }

  redirectToHome(): void {
    this.router.navigateByUrl('home');
  }

  redirectToAllitem(): void {
    this.router.navigateByUrl('allitems/all');
  }

}
