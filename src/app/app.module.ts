import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { StringInterplationComponent } from './Components/String-Interpolation/stringInterpolation.component';
import { PropertyBindingComponent } from './Components/property-binding/property-binding.component';
import { EventBindingComponent } from './Components/event-binding/event-binding.component';
import { TwowayBindingComponent } from './Components/twoway-binding/twoway-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    StringInterplationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
