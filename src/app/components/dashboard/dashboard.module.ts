import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculateExchangeComponent } from './calculate-exchange/calculate-exchange.component';
import { CurrencyComponent } from './currency/currency.component';
import {DashboardComponent} from "./dashboard.component";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {MenubarModule} from "primeng/menubar";
import {DropdownModule} from "primeng/dropdown";
import {ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";



@NgModule({
  declarations: [
    CalculateExchangeComponent,
    CurrencyComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MenubarModule,
    DropdownModule,
    ReactiveFormsModule,
    ButtonModule
  ]
})
export class DashboardModule { }
