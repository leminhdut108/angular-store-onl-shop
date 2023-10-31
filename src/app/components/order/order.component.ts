import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order/confirmation.service';
import { Order } from '../models/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class ConfirmationComponent implements OnInit {
  order: Order;
  constructor(private orderService: OrderService) {
    this.order = {
      username: '',
      totalPrice: 0
    }
  }

  ngOnInit() {
    this.order = this.orderService.getInfoOder();
  }
}
