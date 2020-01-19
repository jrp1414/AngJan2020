import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/Components/String-Interpolation/stringInterpolation.component';

@Component({
  selector: 'product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styles: []
})
export class ProductThumbnailComponent implements OnInit {

  @Input('prod') product:any;
  @Output() SendToParent:EventEmitter<string> = new EventEmitter<string>();

  currentDate:string = new Date().toISOString();

  constructor() { }

  ngOnInit() {
  
  }

  SendDataToParent(){
    let name= prompt("Enter your name");
    this.SendToParent.emit(name);
  }

}
