import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
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

  updateProductDe(){
      this.productService.updateProductDe(this.product).subscribe(data => {
        this.router.navigateByUrl("/admin/productlist1")
      });
  }

  updateProductJe(){
      this.productService.updateProductJe(this.product).subscribe(data => {
        this.router.navigateByUrl("/admin/productlis2")
      });
  }
    update(){
      this.route.params.subscribe(id => {
      const IdFace = id.productID.charAt(0) + id.productID.charAt(1);
      if (IdFace == "je") {
        this.updateProductJe();
      } else {
        this.updateProductDe();
      }
    });
    }
  
}