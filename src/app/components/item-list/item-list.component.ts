import { Component, OnInit } from '@angular/core';
import { CommonDbService } from 'src/app/services/common-db.service';
import { ItemCardModel } from '../item-card/item-card.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  itemLists: ItemCardModel[] = [];

  constructor(private commonDb: CommonDbService) { }

  ngOnInit(): void {
    this.commonDb.getAllItems().subscribe((data: ItemCardModel[])=>{
      this.itemLists = data;
    });
  }

}
