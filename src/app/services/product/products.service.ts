import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Product from '../../components/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  url: string = '/assets/data.json';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }
}
