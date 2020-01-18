import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { StringInterplationComponent } from './Components/String-Interpolation/stringInterpolation.component';
import { PropertyBindingComponent } from './Components/property-binding/property-binding.component';
import { EventBindingComponent } from './Components/event-binding/event-binding.component';
import { TwowayBindingComponent } from './Components/twoway-binding/twoway-binding.component';
import { ProductsComponent } from './products/products.component';
import { ProductThumbnailComponent } from './products/product-thumbnail/product-thumbnail.component';
import { ShortenPipe } from './Pipes/shorten.pipe';
import { FilterPipe } from './Pipes/filter.pipe';

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
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
