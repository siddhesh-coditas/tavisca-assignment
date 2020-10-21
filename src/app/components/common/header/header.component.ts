import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ThemeService } from 'src/app/services/theme.service';
import { UserService } from 'src/app/services/user.service';
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
  showHamBtn = false;

  constructor(
    private cartService: CartService,
    private themeService: ThemeService,
    private router: Router,
    private userService: UserService
  ) {
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    document.addEventListener('click', (event: any) => {
      if (!$(event.target).closest('.theme-toggle-container').length) {
        this.hideHamMenu();
      }
    });
  }

  hideHamMenu(): void {
    this.showMenu = false;
  }

  openCart(): void {
    this.cartService.toggleCartVisibilityStatus();
    this.hideHamMenu();
  }

  logoutCurrUser(): void {
    this.userService.lougoutUser();
    this.hideHamMenu();
    this.router.navigateByUrl('login');
  }

  toggleTheme(): void {
    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
    } else {
      this.themeService.setDarkTheme();
    }
  }

}
