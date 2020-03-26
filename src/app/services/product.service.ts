import { Injectable } from '@angular/core';
import { data } from '../mockdata';
import { Product } from '../product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class ProductService {
  // products = data;
  api = 'https://5e7c7e0da917d70016683601.mockapi.io/product';
  constructor(
    private http : HttpClient
  ) { }

  getProduct(): Observable<Product[]> {
    // return this.products;
    return this.http.get<Product[]>(this.api);
  }

  removeProduct(id){
    // return this.products = this.products.filter(product => product.id != id)
  }
  addProduct(product){
    // console.log(product);

    // let newObj = {id: 7,...product};
    // console.log(newObj);
    // this.products.push(newObj);
    // console.log(this.products)
  }

  // selected: Product;
  // showDetail(product){
  //   this.selected = product;
  // }

}