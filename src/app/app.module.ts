import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { StringInterplationComponent, PropertyBindingComponent, EventBindingComponent, TwowayBindingComponent } from './Components/BasicComponents.index';
import { ProductsComponent, ProductThumbnailComponent } from './products/products.index';
import { ShortenPipe, FilterPipe } from './Pipes/pipes.index';
import { BasicHighlightDirective, BetterHighlightDirective, UnlessDirective } from './Directives/directives.index';
import { TempProductsComponent } from './Components/temp-products/temp-products.component';
import { ProductService, LoggerService } from './Services/services.index';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsModule } from './products/products.module';
import { StudentsModule } from './students/students.module';



@NgModule({
  declarations: [
    AppComponent,
    StringInterplationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,    
    TempProductsComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductsModule,
    StudentsModule,
    AppRoutingModule 
  ],
  // providers: [
  //   LoggerService,ProductService
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
