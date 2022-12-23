import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {CustomerEditComponent} from './customer/customer-edit/customer-edit.component';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';
import {EmployeeListComponent} from './employee/employee-list/employee-list.component';
import {EmployeeEditComponent} from './employee/employee-edit/employee-edit.component';
import {EmployeeCreateComponent} from './employee/employee-create/employee-create.component';
import {AlcoholCreateComponent} from './alcohol/alcohol-create/alcohol-create.component';
import {AlcoholEditComponent} from './alcohol/alcohol-edit/alcohol-edit.component';
import {AlcoholListComponent} from './alcohol/alcohol-list/alcohol-list.component';
import {CartAlcoholComponent} from './cart-alcohol/cart-alcohol.component';
import {DetailAlcoholComponent} from './home/detail-alcohol/detail-alcohol.component';
import {Home1Module} from './home/home1.module';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
    CartAlcoholComponent,
    DetailAlcoholComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Home1Module,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
