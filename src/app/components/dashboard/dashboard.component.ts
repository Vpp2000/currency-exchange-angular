import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  items: MenuItem[] = [
    {
      label: 'Currency calculation',
      icon: 'pi pi-calculator',
      routerLink: ["calculate"]
    },
    {
      label: 'Currency info',
      icon: 'pi pi-money-bill',
      routerLink: ["currency"]
    }
  ];
}
