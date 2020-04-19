import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import { ProductService } from '../product.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-product-list2',
  templateUrl: './product-list2.component.html',
  styleUrls: ['./product-list2.component.css']
})
export class ProductList2Component implements OnInit {
  products: Product[];
  page = 1;
  pageSize = 5;
  constructor(
     private productService : ProductService
  ) { }

  ngOnInit() {
    this.getProductJe();
  }

getProductJe(){
  this.productService.getProductJe().subscribe(data1 => {this.products=data1;})
}

removeItemJe(id){
   this.productService.removeProductJe(id).subscribe(response => {
     this.products = this.products.filter(product => product.id != response.id);
   })
    // this.products = this.products.filter(product => product.id != id);
  }
}