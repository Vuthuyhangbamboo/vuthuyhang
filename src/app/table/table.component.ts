import { Component, OnInit } from '@angular/core';
import { data } from "../mockdata";
import { Product } from "../product";
import { ProductService } from "../services/product.service";
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  products : Product[];
  constructor(
    private productService : ProductService
  ) { }

  ngOnInit() {
    this.getProduct();

  }

  removeItem(id){
    return this.products = this.productService.removeProduct(id);
  }
  getProduct(){
  this.products = this.productService.getProduct();
}
}