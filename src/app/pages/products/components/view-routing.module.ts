import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ViewProductComponent } from './view-product/view-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AddCategoryComponent } from './add-category/add-category.component';

const routes: Routes = [
  {
    path: '', component: ViewProductComponent,
    children: [
      { path: 'addproduct',component: AddProductComponent },
      { path: 'update/:id', component: UpdateProductComponent },
      { path: 'addcategory', component: AddCategoryComponent }
    ]
  }
 
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class ViewRoutingModule {
}
