import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemCardComponent } from './components/item/item-card/item-card.component';
import { ItemListComponent } from './components/item/item-list/item-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path:'home',
    component: ItemListComponent
  },
  {
    path:'item',
    component: ItemCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
