import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { DetailProductComponent } from './product/detail-product/detail-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';
import { DetailsCategoryComponent } from './category/details-category/details-category.component';
import { ListCategoryComponent } from './category/list-category/list-category.component';
import { DetailsproduitbycategoryComponent } from './category/detailsproduitbycategory/detailsproduitbycategory.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ListProductComponent,
    DetailProductComponent,
    UpdateProductComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    DetailsCategoryComponent,
    ListCategoryComponent,
    DetailsproduitbycategoryComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
