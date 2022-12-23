import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Home1RoutingModule} from './home1-routing.module';
import {LoginComponent} from './login/login.component';
import {IndexComponent} from './index/index.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SpiritsComponent} from './spirits/spirits.component';
import {BaseComponent} from './base/base.component';
import {WineComponent} from './wine/wine.component';
import {FocusInvalidInputDirective} from './decentralization/util/focus-invalid-input.directive';


@NgModule({
    declarations: [
        IndexComponent,
        LoginComponent,
        SpiritsComponent,
        BaseComponent,
        WineComponent,
        FocusInvalidInputDirective
    ],
  exports: [],
  imports: [
    CommonModule,
    Home1RoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class Home1Module {
}
