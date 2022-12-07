import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyComponent} from './body/body.component';
import {CartAlcoholComponent} from './cart-alcohol/cart-alcohol.component';
import {DetailAlcoholComponent} from './detail-alcohol/detail-alcohol.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: BodyComponent
  },

  {
    path: 'cart',
    component: CartAlcoholComponent
  },

  {
    path: 'detail',
    component: DetailAlcoholComponent
  },

  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Home1RoutingModule { }
