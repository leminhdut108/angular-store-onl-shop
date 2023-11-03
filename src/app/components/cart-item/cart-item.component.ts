import { Component, EventEmitter, Input, Output } from '@angular/core';
import Cart from '../models/cart';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input() cart: Cart;
  @Output() changeAmount: EventEmitter<Cart> = new EventEmitter();

  constructor() {
    this.cart = {
      id: 0,
      description: '',
      name: '',
      price: 0,
      quantity: 0,
      url: '',
    };
  };

  ngOnChange(): void {}

  amountChange(newValue: any) {
    console.log(newValue);
    if (newValue == null) {
      this.cart.quantity = 1;
    } else if (newValue == 0) {
      alert('Will to remove this product from cart!');
    }
    this.changeAmount.emit(this.cart);
  }
}
