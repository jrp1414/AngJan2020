import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.index';
import { ProductDetailsComponent } from './products/product-details/product-details.component';


const routes: Routes = [
  { path: "home", component: DashboardComponent },
  { path: "", component: DashboardComponent, pathMatch: "full" },
  // { path: "home", redirectTo: "welcome" },
  // { path: "welcome", redirectTo: "products" },
  //{ path: "**", redirectTo: "home" }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }

