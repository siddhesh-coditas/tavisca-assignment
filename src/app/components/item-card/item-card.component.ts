import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { LocalServiceService } from '../../services/local-service.service';
import { ItemCardModel } from './item-card.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() item: ItemCardModel;

  constructor(private locService: LocalServiceService) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    const temp = this.locService.getLocalText('test-1');
  }

}
