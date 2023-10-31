import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/product/products.service';
import Product from '../models/product';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product: Product;
  id: string | null;
  constructor(private route: ActivatedRoute, private products: ProductsService) {
    this.id = '';
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: ''
    }
  };

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.products.getProducts().subscribe(res => {
      res.forEach((item, _) => {
        if (`${item.id}` == this.id) {
          this.product = item;
        }
      })
    });
  }
}
