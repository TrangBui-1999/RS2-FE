import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

//api server
import { ApiService } from './shared/api.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewListProductsComponent } from './components/view-list-products/view-list-products.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ListProductComponent } from './components/view-list-products/list-product/list-product.component';
import { ProductItemComponent } from './components/view-list-products/list-product/product-item/product-item.component';



@NgModule({
  declarations: [
    AppComponent,
    ViewListProductsComponent,
    AddProductComponent,
    ListProductComponent,
    ProductItemComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
