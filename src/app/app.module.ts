import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { StringInterplationComponent, PropertyBindingComponent, EventBindingComponent, TwowayBindingComponent } from './Components/BasicComponents.index';
import { ProductsComponent, ProductThumbnailComponent } from './products/products.index';
import { ShortenPipe, FilterPipe } from './Pipes/pipes.index';
import { BasicHighlightDirective, BetterHighlightDirective, UnlessDirective } from './Directives/directives.index';
import { TempProductsComponent } from './Components/temp-products/temp-products.component';
import { ProductService,LoggerService } from './Services/services.index';

@NgModule({
  declarations: [
    AppComponent,
    StringInterplationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    ProductsComponent,
    ProductThumbnailComponent,
    ShortenPipe,
    FilterPipe,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    TempProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  // providers: [
  //   LoggerService,ProductService
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
