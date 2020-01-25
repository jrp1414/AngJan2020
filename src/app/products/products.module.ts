import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent, ProductThumbnailComponent } from './products.index';
import { ShortenPipe } from '../Pipes/pipes.index';
import { FilterPipe } from '../Pipes/filter.pipe';
import { BasicHighlightDirective, BetterHighlightDirective } from '../Directives/directives.index';
import { UnlessDirective } from '../Directives/unless.directive';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductThumbnailComponent,
    ShortenPipe,
    FilterPipe,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: "products", component: ProductsComponent },
      { path: "productdetails/:id", component: ProductDetailsComponent },
    ])
  ]
})
export class ProductsModule { }
