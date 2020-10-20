import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalServiceService } from '../../../services/local-service.service';
import { ItemCardModel } from './item-card.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() item: ItemCardModel;

  constructor(
    public locService: LocalServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    const temp = this.locService.getLocalText('test-1');
  }

  openItemDetails() {
    this.router.navigateByUrl(`item/${this.item.id}`);
  }

}
