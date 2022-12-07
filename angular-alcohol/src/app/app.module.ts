import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { AlcoholCreateComponent } from './alcohol/alcohol-create/alcohol-create.component';
import { AlcoholEditComponent } from './alcohol/alcohol-edit/alcohol-edit.component';
import { AlcoholListComponent } from './alcohol/alcohol-list/alcohol-list.component';
import { BodyComponent } from './home/body/body.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { CartAlcoholComponent } from './home/cart-alcohol/cart-alcohol.component';
import { DetailAlcoholComponent } from './home/detail-alcohol/detail-alcohol.component';
import {Home1Module} from './home/home1.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerEditComponent,
    CustomerCreateComponent,
    EmployeeListComponent,
    EmployeeEditComponent,
    EmployeeCreateComponent,
    AlcoholCreateComponent,
    AlcoholEditComponent,
    AlcoholListComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    CartAlcoholComponent,
    DetailAlcoholComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Home1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
