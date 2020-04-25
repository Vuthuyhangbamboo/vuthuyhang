import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../product.service";
import { Product } from "../product";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(id => {
      const IdFace = id.productID.charAt(0) + id.productID.charAt(1);
      if (IdFace == "je") {
        this.getProductt();
      } else {
        this.getProduct();
      }
    });
  }

  getProduct() {
    this.route.params.subscribe(param => {
      this.productService
        .showProductD(param.productID)
        .subscribe(data => (this.product = data));
    });
  }

  getProductt() {
    this.route.params.subscribe(param => {
      this.productService
        .showProductJ(param.productID)
        .subscribe(data => (this.product = data));
    });
  }

  addProductOrder(id) {
    this.productService.addProductOrder(this.product).subscribe(Response => {
      this.router.navigateByUrl("/cart");
    });
  }
}
