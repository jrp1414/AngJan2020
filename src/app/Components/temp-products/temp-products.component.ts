import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/Services/logger.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'temp-products',
  template: `
    <p>
      Temp Products
      {{message}}
    </p>
  `,
  styles: [],
  // providers: [LoggerService, ProductService]
})
export class TempProductsComponent implements OnInit {
  message:string;
  constructor(public logger: LoggerService, private ps: ProductService) { }

  ngOnInit() {
    this.logger.log("Inside Temp Products");
    console.log(this.ps.GetProducts());
    this.ps.messageSender.subscribe((response) => {
      this.message = response;
    });
  }

}
