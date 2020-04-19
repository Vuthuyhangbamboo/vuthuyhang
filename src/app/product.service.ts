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

  removeProductJe(id): Observable<Product>{
    return this.http.delete<Product>(`${this.apiJewe}/${id}`);
    // return this.products.filter(product => product.id !== id);
  }
  removeProductDe(id): Observable<Product>{
    return this.http.delete<Product>(`${this.apiDress}/${id}`);
    // return this.products.filter(product => product.id !== id);
  }

  addProductJe(product){
    return this.http.post<Product>(`${this.apiJewe}`, product);
  }

  addProductDe(product){
    return this.http.post<Product>(`${this.apiDress}`, product);
  }
}