import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyComponent} from './home/body/body.component';
import {Home1Module} from './home/home1.module';


const routes: Routes = [
  {
    path: 'home', loadChildren: () => Home1Module
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
