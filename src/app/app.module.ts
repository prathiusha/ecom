import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponentComponent } from './cart-component/cart-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductsComponent,
    HeaderComponent,
    CardComponent,
    CartComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
