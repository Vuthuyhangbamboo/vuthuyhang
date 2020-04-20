import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AdminComponent } from "./admin/admin.component";
import { CategoryComponent } from "./category/category.component";
import { ProductList1Component } from "./product-list1/product-list1.component";
import { ProductList2Component } from "./product-list2/product-list2.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent},
  { path: "admin", component: AdminComponent,
    children:[
      { path: "",redirectTo: "productlist",pathMatch: "full"},
      { path: "productlist", component: ProductListComponent},
      { path: "productlist1", component: ProductList1Component},
      { path: "productlist2", component: ProductList2Component}
    ]
  },
  { path: "**", redirectTo: "404", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
