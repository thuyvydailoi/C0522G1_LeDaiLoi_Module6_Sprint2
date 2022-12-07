import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Home1RoutingModule } from './home1-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


@NgModule({
    declarations: [HomeComponent, LoginComponent],
    exports: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        Home1RoutingModule
    ]
})
export class Home1Module { }
