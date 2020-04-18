import { Injectable } from '@angular/core';
import { Product } from '../product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class ProductService {

apiJewe = 'https://5e7c7e0da917d70016683601.mockapi.io/jewelry';

apiDress = 'https://5e7c7e0da917d70016683601.mockapi.io/weddingDress';

  constructor(
    private http: HttpClient
  ) { }

   getProductJe(): Observable<Product[]> {
    // return this.products;
    return this.http.get<Product[]>(this.apiJewe);
  }

   getProductDress(): Observable<Product[]> {
    // return this.products;
    return this.http.get<Product[]>(this.apiDress);
  }
}