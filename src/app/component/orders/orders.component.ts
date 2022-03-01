import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/interfaces';
import { FirestoreService } from 'src/app/shared/firestore.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orders: IOrder[] = [];
  tOrders: unknown;

  constructor(private storeService: FirestoreService) {}

  async ngOnInit() {
    const data = await this.storeService.getData();
    console.log(data);
    this.orders = data;
  }

  toggleAccordion(event: Event) {
    const div = event.target as HTMLDivElement;

    if (div.className === 'order-header-info') {
      div.parentElement?.parentElement?.classList.toggle('active');
    }
    div.parentElement?.classList.toggle('active');
  }
}
