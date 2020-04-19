import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import { ProductService } from '../product.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  productss: Product[];
  items = this.products;
  page = 1;
  pageSize = 10;
  constructor(
    private productService : ProductService
  ) { }

  ngOnInit() {
    this.getProductDre();
    this.getProductJe();
  }

  getProductJe(){
  this.productService.getProductJe().subscribe(data1 => {this.products=data1;})
}

  getProductDre(){
  this.productService.getProductDress().subscribe(data2 => {this.productss=data2;})
}

}