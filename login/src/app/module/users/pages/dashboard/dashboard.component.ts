import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  stats = [
    { title: 'Total Sales', value: '$5000' },
    { title: 'Orders', value: '150' },
    { title: 'Customers', value: '120' }
  ];

  transactions = [
    { item: 'Product A', price: 20, quantity: 2, total: 40 },
    { item: 'Product B', price: 15, quantity: 1, total: 15 },
    { item: 'Product C', price: 30, quantity: 3, total: 90 }
  ];
}
