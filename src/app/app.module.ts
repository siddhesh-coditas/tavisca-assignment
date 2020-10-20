import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemCardComponent } from './components/item/item-card/item-card.component';
import { ItemListComponent } from './components/item/item-list/item-list.component';
import { HeaderComponent } from './components/common/header/header.component';
import { CartComponent } from './components/common/cart/cart.component';
import { ItemDetailsComponent } from './components/item/item-details/item-details.component';
import { StoreModule } from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import { CartReducer } from './components/common/cart/state/cart-reducer';

@NgModule({
  declarations: [
    AppComponent,
    ItemCardComponent,
    ItemListComponent,
    HeaderComponent,
    CartComponent,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ allItems: CartReducer }),
    StoreDevtoolsModule.instrument({
      name: "E-kart",
      logOnly: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
