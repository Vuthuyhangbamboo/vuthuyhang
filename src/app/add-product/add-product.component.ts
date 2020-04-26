import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product = new Product();
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addProductJe(){
    // this.route.params.subscribe(id => {
    //   const IdFace = id.productID.charAt(0) + id.productID.charAt(1);
    //   if (IdFace == "je") {
    //     this.getProductt();
    //   } else {
    //     this.getProduct();
    //   }
    // });
    this.productService.addProductJe(this.product).subscribe(data =>{
       this.router.navigateByUrl("/admin/productlist2")
    } );
  }
  

}