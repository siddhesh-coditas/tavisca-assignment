import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonDbService } from 'src/app/services/common-db.service';
import { UserService } from 'src/app/services/user.service';
import { ItemCardModel } from '../item-card/item-card.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  itemLists: ItemCardModel[] = [];
  isAllItem: boolean;

  constructor(
    private commonDb: CommonDbService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.isAllItem = this.route.snapshot.paramMap.get('listMode') === 'all';
    this.validateLoggedInUser();
  }

  ngOnInit(): void {
    const userData = this.userService.getUserData();
    if (this.isAllItem) {
      this.commonDb.getAllItems().subscribe((data: ItemCardModel[]) => {
        this.itemLists = data.filter((item) => {
          // return userData.items.indexOf(item.userAccess) === -1 || item.id == null;
          return item.userAccess === null;
        });
      });
    } else {
      for (const item of userData.items) {
        this.commonDb.getSpecificItem(item).subscribe((data: ItemCardModel) => {
          this.itemLists.push(data);
        });
      }
    }
  }

  validateLoggedInUser(): void {
    const user = this.userService.getUserData();
    if (user === null) {
      this.router.navigateByUrl('login');
    }
  }

  redirectToListing(): void {
    this.router.navigateByUrl('home');
  }

}
