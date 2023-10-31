import { Injectable } from '@angular/core';
import { Order } from '../../components/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  order: Order;
  constructor() {
    this.order = {
      username: '',
      totalPrice: 0
    }
  }

  createOrder(order: Order) {
    this.order = order;
  }

  getInfoOder(): Order {
    return this.order;
  }
}
