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
  page = 1;
  pageSize = 5;
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

  removeItemJe(id){
   this.productService.removeProductJe(id).subscribe(response => {
     this.products = this.products.filter(product => product.id != response.id);
   })
    // this.products = this.products.filter(product => product.id != id);
  }
  removeItemDe(id){
   this.productService.removeProductDe(id).subscribe(response => {
     this.products = this.products.filter(product => product.id != response.id);
   })
    // this.products = this.products.filter(product => product.id != id);
  }

}