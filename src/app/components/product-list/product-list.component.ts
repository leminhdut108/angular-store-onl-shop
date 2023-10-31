import { Component } from '@angular/core';
import { ProductsService } from '../../services/product/products.service';
import Product from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: Product[] = [];
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => {
      this.products = res;
    });
  }
}
