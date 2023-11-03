import { CartService } from '../../services/cart/cart.service';
import { Component, Input, OnInit } from '@angular/core';
import Product from '../models/product';
import Cart from '../models/cart';

@Component({
  selector: 'app-option-select-quantity',
  templateUrl: './option-select-quantity.component.html',
  styleUrls: ['./option-select-quantity.component.css'],
})
export class OptionSelectQuantityComponent implements OnInit {
  @Input() product: Product;
  @Input() select: number[] = [];
  quantity: number = 1;

  constructor(private cartService: CartService) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
    };
    for (let i = 1; i <= 10; i++) {
      this.select.push(i);
    }
  }
  ngOnInit() {}

  submitForm(): void {
    const cart: Cart = {
      ...this.product,
      quantity: +this.quantity,
    };
    this.cartService.addItemToCart(cart);
    alert('Added to cart!');
  }
}
