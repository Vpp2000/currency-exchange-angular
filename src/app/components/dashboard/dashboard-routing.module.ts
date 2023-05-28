import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import {CurrencyComponent} from "./currency/currency.component";
import {CalculateExchangeComponent} from "./calculate-exchange/calculate-exchange.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: CalculateExchangeComponent },
      { path: 'currency', component: CurrencyComponent },
      { path: 'calculate', component: CalculateExchangeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
