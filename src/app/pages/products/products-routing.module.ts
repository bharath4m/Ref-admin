import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductsPageComponent } from './containers';
// import { ViewProductComponent } from './components/view-product/view-product.component';
// import { AddProductComponent } from './components/add-product/add-product.component';
// import { UpdateProductComponent } from './components/update-product/update-product.component';
// import { AddCategoryComponent } from './components/add-category/add-category.component';

const routes: Routes = [
  {
    path: '', component: ProductsPageComponent,
    
    children: [
      { path: 'view', loadChildren: () => import(`./components/view.module`).then(m => m.ViewModule)}
      // { path: 'update/:id', component: UpdateProductComponent },
      // { path:'view', component:ViewProductComponent},
      // { path: '', redirectTo:'view',  component: ViewProductComponent },
      // { path: 'addcategory', component: AddCategoryComponent }
    ]
  }
  // { path: 'addproduct',component: AddProductComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class ProductsRoutingModule {
}
