import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ProductsComponent} from'./products/products.component'
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ProductDetailComponent} from './product-detail/product-detail.component'

const routes: Routes = [
  {
    path: '', 
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent
  },
  { path: 'contact', 
  component: ContactComponent 
  },
  {path: 'demo', 
  component: DemoComponent
  },
  { path:'**',
    component: PageNotFoundComponent
}
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
