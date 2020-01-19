import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoggerService } from '../Services/logger.service';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  // encapsulation:ViewEncapsulation.None,
  // providers:[LoggerService,ProductService]
})
export class ProductsComponent implements OnInit {
  message:string;
  ngOnInit(): void {
    this.logger.log("Test");

    this.ps.messageSender.subscribe((response)=>{
      this.message = response;
    });
  }

  imageWidth: string = "150px";
  imageHeight: string = "150px";

  childData: string;

  products: any[];
  constructor(public logger: LoggerService,private ps:ProductService) {
    this.products = this.ps.GetProducts();  
  }
  tempProducts: any[];
  filterText: string = "";

  
}
