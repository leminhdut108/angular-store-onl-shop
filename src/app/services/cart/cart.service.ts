import { Injectable } from '@angular/core';
import Cart from '../../components/models/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartList: Cart[] = [];
  constructor() {
    console.log(this.cartList);
  }

  addItemToCart(cart: Cart): void {
    const findProd = this.cartList.find((item) => item.id === cart.id);
    if (findProd) {
      findProd.quantity = findProd.quantity + cart.quantity;
    } else {
      this.cartList.push(cart);
    }
    console.log(this.cartList);
  }

  getInfoCart(): Cart[] {
    return this.cartList;
  }

  deleteCart() {
    this.cartList = [];
  }
}
