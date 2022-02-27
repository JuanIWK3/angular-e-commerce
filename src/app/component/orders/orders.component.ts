import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/interfaces';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orders: IOrder[] = JSON.parse(localStorage.getItem('orders')!);

  constructor() {}

  toggleAccordion(event: Event) {
    const div = event.target as HTMLDivElement;

    if (div.className === 'order-header-info') {
      div.parentElement?.parentElement?.classList.toggle('active');
    }
    div.parentElement?.classList.toggle('active');
  }

  ngOnInit(): void {}
}
