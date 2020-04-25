import { Injectable } from '@angular/core';
import { Product } from '../product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class ProductService {
apiJewe = 'https://5e7c7e0da917d70016683601.mockapi.io/jewelry';

apiDress = 'https://5e7c7e0da917d70016683601.mockapi.io/weddingDress';

apiOrder = 'https://5e7c7e0da917d70016683601.mockapi.io/Order';

  constructor(
    private http: HttpClient
  ) { }
    // show ra sản phẩm
   getProductJe(): Observable<Product[]> {
  
    return this.http.get<Product[]>(this.apiJewe);
  }

   getProductDress(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiDress);
  }

    getProductOrder(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiOrder);
  }

    //show ra chi tiết sản phâm
  showProductJ(id): Observable<Product>{
    return this.http.get<Product>(`${this.apiJewe}/${id}`);
  }

  showProductD(id): Observable<Product>{
    return this.http.get<Product>(`${this.apiDress}/${id}`);
  }

  // xóa sản phẩm
  removeProductJe(id): Observable<Product>{
    return this.http.delete<Product>(`${this.apiJewe}/${id}`);
    // return this.products.filter(product => product.id !== id);
  }
  removeProductDe(id): Observable<Product>{
    return this.http.delete<Product>(`${this.apiDress}/${id}`);
    // return this.products.filter(product => product.id !== id);
  }

  removeProductOrder(name): Observable<Product>{
    return this.http.delete<Product>(`${this.apiOrder}/${name}`);
    // return this.products.filter(product => product.id !== id);
  }

  // thêm sản phẩm

  addProductJe(product){
    return this.http.post<Product>(`${this.apiJewe}`, product);
  }

  addProductDe(product){
    return this.http.post<Product>(`${this.apiDress}`, product);
  }

  addProductOrder(product){
    return this.http.post<Product>(`${this.apiOrder}`, product);
  }

  // edit sản phẩm
  
  updateProductJe(product){
     return this.http.put<Product>(`${this.apiJewe}/${product.id}`, product);
  }

  updateProductDe(product){
     return this.http.put<Product>(`${this.apiDress}/${product.id}`, product);
  }
}