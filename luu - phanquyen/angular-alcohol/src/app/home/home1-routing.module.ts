import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {SpiritsComponent} from './spirits/spirits.component';
import {BaseComponent} from './base/base.component';
import {WineComponent} from './wine/wine.component';
import {LoginComponent} from './login/login.component';
import {DetailAlcoholComponent} from './detail-alcohol/detail-alcohol.component';
import {CartAlcoholComponent} from '../cart-alcohol/cart-alcohol.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'spirits', component: SpiritsComponent},
  {path: 'base', component: BaseComponent},
  {path: 'wine', component: WineComponent},
  {path: 'login', component: LoginComponent},
  {path: 'detail/:id', component: DetailAlcoholComponent},
  {path: 'cart', component: CartAlcoholComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Home1RoutingModule {
}
