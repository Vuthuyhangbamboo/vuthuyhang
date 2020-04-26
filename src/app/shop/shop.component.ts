import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  productss: Product[];
  product: Product;
  constructor(
    private productService : ProductService,
    private route : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
        this.getProductDre();   
  }
  getProductDre(){
  this.productService.getProductDress().subscribe(data2 => {this.productss=data2;})
}

addProductOrder(id) {
    this.productService.addProductOrder(this.product).subscribe(Response => {
      this.router.navigateByUrl("/cart");
    });
  }
}