import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import { ProductService } from '../product.service';

@Component({
  selector: 'app-shop1',
  templateUrl: './shop1.component.html',
  styleUrls: ['./shop1.component.css']
})
export class Shop1Component implements OnInit {
 productss: Product[];
  page = 1;
  pageSize = 5;
  constructor(
    private productService : ProductService
  ) { }

  ngOnInit() {
    this.getProductJe();
  }
  getProductJe(){
  this.productService.getProductJe().subscribe(data2 => {this.productss=data2;})
}
}