import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { ProductService } from './product.service';
import { AdminComponent } from './admin/admin.component';
import { CategoryComponent } from './category/category.component';
import { ProductList1Component } from './product-list1/product-list1.component';
import { ProductList2Component } from './product-list2/product-list2.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';
import { WeddingComponent } from './wedding/wedding.component';
import { Shop1Component } from './shop1/shop1.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    IntroduceComponent,
    ProductComponent,
    FooterComponent,
    AdminComponent,
    CategoryComponent,
    ProductList1Component,
    ProductList2Component,
    AddProductComponent,
    EditProductComponent,
    ContactComponent,
    ProductDetailComponent,
    CartComponent,
    ShopComponent,
    WeddingComponent,
    Shop1Component,
    DashboardComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule
    // FormsModule
  ],
  // providers: [ProductService],
  bootstrap: [AppComponent],
  providers: [ProductService]
})
export class AppModule { }
