import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import { ProductService } from '../product.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from "@angular/router";
import { async } from '@angular/core/testing';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[];
  page = 1;
  pageSize = 5;
  costPrice = 0;
  constructor(
    private productService : ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    (async () => {
      await new Promise((resolve, reject) => {
        this.productService.getProductOrder().subscribe(data1 => {this.products=data1; resolve(data1)});
      });
      
      this.loadCostPrice();
    })();
  }

  getProductOrder(){
  this.productService.getProductOrder().subscribe(data1 => {this.products=data1;})
}

  removeItemOrder(id){
    (async () => {
      await new Promise((resolve, reject) => {
        this.productService.removeProductOrder(id).subscribe(response => {
     this.products = this.products.filter(product => product.id != response.id);});  
      this.productService.getProductOrder().subscribe(data => {this.products=data; resolve(data)});
  })
  this.router.navigateByUrl("/cart");
  for(const data of this.products) {
      this.costPrice = 0;
      this.costPrice = Number(this.costPrice) + Number(data.price)*0.88;
    }
  })();
  }

  loadCostPrice() {
    for(const data1 of this.products) {
      this.costPrice = Number(this.costPrice) + Number(data1.price)*0.88;
    }
  }

}