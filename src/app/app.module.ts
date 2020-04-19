import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product.service';
import { AdminComponent } from './admin/admin.component';
import { CategoryComponent } from './category/category.component';
import { ProductList1Component } from './product-list1/product-list1.component';
import { ProductList2Component } from './product-list2/product-list2.component';


@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    HeaderComponent,
    ContentComponent,
    IntroduceComponent,
    ProductComponent,
    FooterComponent,
    ProductListComponent,
    AdminComponent,
    CategoryComponent,
    ProductList1Component,
    ProductList2Component
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule 
    // FormsModule
  ],
  // providers: [ProductService],
  bootstrap: [AppComponent],
  providers: [ProductService]
})
export class AppModule { }
