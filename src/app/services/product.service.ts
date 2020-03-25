import { Injectable } from '@angular/core';
import { data } from '../mockdata';
import { Product } from '../product';
@Injectable()
export class ProductService {
  products = data;
  constructor() { }
  getProduct(){
    return this.products;
  }
  removeProduct(id){
    return this.products = this.products.filter(product => product.id != id)
  }
  addProduct(product){
    console.log(product);

    let newObj = {id: 7,...product};
    console.log(newObj);
    this.products.push(newObj);
    console.log(this.products)

  }
}