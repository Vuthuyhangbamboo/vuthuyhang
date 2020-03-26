import { Component, OnInit } from '@angular/core';
import { data } from "../mockdata";
import { Product } from "../product";
import { ProductService } from "../services/product.service";
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products : Product[];
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProduct();
  }
getProduct(){
  this.products = this.productService.getProduct();
}

select: Product[];
ShowDetail(product){
  this.select = product;
}
}