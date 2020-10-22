import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddIemComponent } from './components/item/add-iem/add-iem.component';
import { ItemDetailsComponent } from './components/item/item-details/item-details.component';
import { ItemListComponent } from './components/item/item-list/item-list.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: ItemListComponent
  },
  {
    path: 'item/:id/:isUpdateMode',
    component: ItemDetailsComponent
  },
  {
    path: 'item/:id',
    component: ItemDetailsComponent
  },
  {
    path: 'add',
    component: AddIemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
