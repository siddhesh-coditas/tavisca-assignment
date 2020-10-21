import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonDbService } from 'src/app/services/common-db.service';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from '../../user/user.model';
import { ItemCardModel } from '../item-card/item-card.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  itemLists: ItemCardModel[] = [];

  constructor(
    private commonDb: CommonDbService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.validateLoggedInUser();
  }

  ngOnInit(): void {
    this.commonDb.getAllItems().subscribe((data: ItemCardModel[]) => {
      this.itemLists = data;
    });
  }

  validateLoggedInUser(): void {
    const user = this.userService.getUserId();
    if (user === null) {
      this.router.navigateByUrl('login');
    }
  }

}
