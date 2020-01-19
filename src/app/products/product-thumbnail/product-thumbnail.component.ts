import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/Components/String-Interpolation/stringInterpolation.component';
import { LoggerService } from 'src/app/Services/logger.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styles: []
})
export class ProductThumbnailComponent implements OnInit {

  @Input('prod') product:any;
  @Output() SendToParent:EventEmitter<string> = new EventEmitter<string>();

  currentDate:string = new Date().toISOString();

  constructor(public logger: LoggerService,private ps:ProductService) { }

  EmitData(){
    this.ps.messageSender.emit(prompt("Enter message"));
  }

  ngOnInit() {
  // this.logger.log("From Product Thumbnail");
  }

  SendDataToParent(){
    let name= prompt("Enter your name");
    this.SendToParent.emit(name);
  }

}
