import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from './header/header.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from "./admin/admin.component";
import { CategoryComponent } from "./category/category.component";
import { ProductList1Component } from "./product-list1/product-list1.component";
import { ProductList2Component } from "./product-list2/product-list2.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { ContactComponent } from "./contact/contact.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { CartComponent } from "./cart/cart.component";
import { ShopComponent } from "./shop/shop.component";
import { WeddingComponent } from "./wedding/wedding.component";
import { Shop1Component } from "./shop1/shop1.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent},
  { path: "wedding", component: WeddingComponent,
    children:[
      { path: "",redirectTo: "shop",pathMatch: "full"},
      { path: "shop", component: ShopComponent},
      { path: "shop1", component: Shop1Component},
      
    ]
  },
  { path: "contact", component: ContactComponent},
  { path: "product/:productID", component: ProductDetailComponent},
  { path: "cart", component: CartComponent},
  { path: "admin", component: AdminComponent,
    children: [
         { path: "",redirectTo: "dashboard",pathMatch: "full"},
         { path: "dashboard", component: DashboardComponent},
         { path: "productlist1", component: ProductList1Component},
         { path: "productlist2", component: ProductList2Component},
         { path: "edit/:productID", component: EditProductComponent},
         { path: "addproduct", component: AddProductComponent}
    ]  
  },
  { path: "**", redirectTo: "404", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
