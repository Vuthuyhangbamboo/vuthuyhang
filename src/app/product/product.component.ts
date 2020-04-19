import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import { ProductService } from '../product.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  closeResult = '';
  products: Product[];
  productss: Product[];
  constructor(
    private productService : ProductService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getProductJe();
    this.getProductDre();
  }

  open(content) {
    console.log("vao đay");
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  getProductJe(){
  this.productService.getProductJe().subscribe(data1 => {this.products=data1;})
}

  getProductDre(){
  this.productService.getProductDress().subscribe(data2 => {this.productss=data2;})
}

}