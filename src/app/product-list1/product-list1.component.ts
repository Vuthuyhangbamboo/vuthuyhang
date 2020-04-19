import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import { ProductService } from '../product.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-list1',
  templateUrl: './product-list1.component.html',
  styleUrls: ['./product-list1.component.css']
})
export class ProductList1Component implements OnInit {
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
removeItemDe(id){
   this.productService.removeProductDe(id).subscribe(response => {
     this.productss = this.productss.filter(product => product.id != response.id);
   })
    // this.products = this.products.filter(product => product.id != id);
  }

}