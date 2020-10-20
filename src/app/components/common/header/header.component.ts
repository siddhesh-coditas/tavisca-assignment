import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ToggleButtonElement } from './../../../elements/toggle-button/toggle-button'

console.assert(ToggleButtonElement !== undefined);

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  showMenu = false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    document.addEventListener('click', (event: any)=>{
      if(!$(event.target).closest('.theme-toggle-container').length) {
        this.showMenu = !this.showMenu;
      }
    })
  }

  openCart() {
    this.cartService.toggleCartVisibilityStatus();
  }

}
