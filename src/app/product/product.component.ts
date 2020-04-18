import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  productss: Product[];
  constructor(
    private productService : ProductService
  ) { }

  ngOnInit() {
    this.getProductJe();
    this.getProductDre();
  }
  getProductJe(){
  this.productService.getProductJe().subscribe(data1 => {this.products=data1;})
}

  getProductDre(){
  this.productService.getProductDress().subscribe(data2 => {this.productss=data2;})
}

}