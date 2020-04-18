import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    HeaderComponent,
    ContentComponent,
    IntroduceComponent,
    ProductComponent,
    FooterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    // FormsModule
  ],
  // providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
