import { Component, OnInit, } from '@angular/core';
import Cart from '../models/cart';
import { CartService } from '../../services/cart/cart.service';
import { OrderService } from '../../services/order/confirmation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartList: Cart[] = [];
  fullName: string = '';
  address: string = '';
  creditCard: string = '';
  total: number = 0;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.cartList = this.cartService.getInfoCart();
    this.cartList.forEach((c) => {
      this.total += c.price * c.quantity;
    });
  }

  amountChange(cart: Cart) {
    this.total = 0;
    this.cartList.forEach((item, i) => {
      if (item.id == cart.id) {
        this.cartList[i] = cart;
      }
      this.total += item.price * item.quantity;
    });

    //remove product when quantity = 0
    this.cartList.forEach((item, i) => {
      if (cart.quantity === 0 && item.id === cart.id) {
        this.cartList.splice(i, 1);
      }
    });
  }

  submitForm() {
    this.orderService.createOrder({
      username: this.fullName,
      totalPrice: this.total
    });
    this.cartService.deleteCart();
    this.route.navigateByUrl('/confirmationOrder');
  }
}
