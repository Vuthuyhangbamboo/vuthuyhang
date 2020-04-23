import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import { ProductService } from '../product.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[];
  page = 1;
  pageSize = 5;
  constructor(
    private productService : ProductService
  ) { }

  ngOnInit() {
    this.getProductOrder();
  }

  getProductOrder(){
  this.productService.getProductOrder().subscribe(data1 => {this.products=data1;})
}

  removeItemOrder(id){
   this.productService.removeProductOrder(id).subscribe(response => {
     this.products = this.products.filter(product => product.id != response.id);
   })
    // this.products = this.products.filter(product => product.id != id);
  }

}