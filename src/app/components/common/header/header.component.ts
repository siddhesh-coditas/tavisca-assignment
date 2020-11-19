import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { LocalServiceService } from 'src/app/services/local-service.service';
import { ThemeService } from 'src/app/services/theme.service';
import { UserService } from 'src/app/services/user.service';
import { BaseComp } from '../../base';
import { CustomOptionModel, DropdownSides } from 'src/app/elements/custom-dropdown/dropdown-model';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends BaseComp implements OnInit, AfterViewInit {
  showMenu = false;
  showHamBtn = false;
  side = DropdownSides.TOP_LEFT;

  optionList: CustomOptionModel[] = [
    {label: this.i18n('header.ham-menu.my-item'), value: '1'},
    {label: this.i18n('header.ham-menu.all-item'), value: '2'},
    {label: this.i18n('header.ham-menu.cart'), value: '3'},
    {label: this.i18n('header.ham-menu.logout'), value: '4'}
  ];

  constructor(
    private cartService: CartService,
    private themeService: ThemeService,
    private router: Router,
    public userService: UserService,
    public locService: LocalServiceService
  ) {
    super(locService);
    const theme = this.themeService.getActiveTheme();
    this.themeService.setActiveTheme(theme);
  }

  ngOnInit(): void {
    this.userService.updateLoginStatus(!!this.userService.getUserData());
  }

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

  addProduct(): void {
    this.router.navigateByUrl('add');
    this.hideHamMenu();
  }

  openAllItemPage(): void {
    this.hideHamMenu();
    this.router.navigateByUrl('allitems/all');
  }

  openMyItemPage(): void {
    this.hideHamMenu();
    this.router.navigateByUrl('home');
  }

  getTheme(): string {
    return this.themeService.getActiveTheme().name;
  }

  onDropdownOption(value) {
    switch(value) {
      case '1': this.openMyItemPage(); break;
      case '2': this.openAllItemPage(); break;
      case '3': this.openCart(); break;
      case '4': this.logoutCurrUser(); break;
    }
  }
}
