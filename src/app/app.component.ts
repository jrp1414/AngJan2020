import { Component } from '@angular/core';

@Component({
  // selector: 'app-root',
  // selector: '[app-root]',
  selector: '.app-root',
  // template:"<h1>Hello World</h1><h2>Test line 2</h2>" // Inline Html Template
  // template:`<h1>Hello World</h1>
  // <h2>Test line 2</h2>` // Multiline Html Template
  templateUrl:"./app.component.html",
  // styles:[
  //   `.test1{color:'red'}`
  // ]
  styleUrls:["./app.component.css"]
})
export class AppComponent {
  title = 'AngJan2020';
  
}
