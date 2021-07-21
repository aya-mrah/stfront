import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
const routes: Routes = [
  { path: 'products', component: ListProductComponent },
  { path: 'productadd', component: AddProductComponent },
  { path: 'product/:id', component: DetailProductComponent },
  { path: 'productupdate/:id', component: UpdateProductComponent },


  { path: 'categories', component: ListCategoryComponent },
  { path: 'categorie/:id', component: DetailsCategoryComponent },
  { path: 'categorieadd', component: AddCategoryComponent },
  { path: 'categorieupdate/:id', component: UpdateCategoryComponent },
  { path: 'produit/:id', component: DetailsproduitbycategoryComponent },

  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
