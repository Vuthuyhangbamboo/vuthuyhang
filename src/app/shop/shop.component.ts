import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import { ProductService } from '../product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  productss: Product[];
  page = 1;
  pageSize = 5;
  constructor(
    private productService : ProductService
  ) { }

  ngOnInit() {
    this.getProductDre();
  }
  getProductDre(){
  this.productService.getProductDress().subscribe(data2 => {this.productss=data2;})
}
}