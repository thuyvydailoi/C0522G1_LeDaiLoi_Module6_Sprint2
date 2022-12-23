import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Home1Module} from './home/home1.module';
import {CartAlcoholComponent} from './cart-alcohol/cart-alcohol.component';
import {DetailAlcoholComponent} from './home/detail-alcohol/detail-alcohol.component';
import {LoginComponent} from './home/login/login.component';


const routes: Routes = [
  {
    path: '', loadChildren: () => Home1Module
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
