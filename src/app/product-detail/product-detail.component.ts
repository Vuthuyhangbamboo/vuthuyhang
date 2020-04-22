import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProduct();
    this.getProductt();
  }


  getProduct(){
    this.route.params.subscribe(param => {
        this.productService.showProductD(param.productID).subscribe(data => this.product = data);
    })
  }

  getProductt(){
    this.route.params.subscribe(param => {
        this.productService.showProductJ(param.productID).subscribe(data => this.product = data);
    })
  }

}