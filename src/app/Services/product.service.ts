import { EventEmitter, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private productsList: Product[];
  public messageSender: EventEmitter<string> = new EventEmitter<string>(); 
  // Same we can do using EventEmitter as Observable, Subject and EventEmitter are all in the same family of RxJs Observables
  public notify:Subject<string>= new Subject<string>();
  constructor(private ls: LoggerService) {
    this.productsList = products;
    this.ls.log("Hello");
  }

  GetProducts() {
    return this.productsList;
  }

  GetProductDetails(id: number):Product {
    return this.productsList.find((prod) => prod.productId == id);
  }
}


export interface Product {
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: Date;
  description?: Description;
  price: number;
  starRating:number;
  imageUrl: string;
  emailId: string;
}

export interface Description {
  descText?:string;
  mfdYear:number;
}

const products:Product[] = [
  {
    "productId": 1,
    "productName": "Leaf Rake",
    "productCode": "GDN-0011",
    "releaseDate": new Date(2016,2,25),
    "description": {
      'descText': "Leaf Rake Description",
      "mfdYear": 2018
    },
    "price": 19.95485968596,
    "starRating": 3,
    "imageUrl": "https://www.harrodhorticultural.com/uploads/images/products/GGT-886_Sneeboer_Leaf_Rakes_1.jpg",
    "emailId": "test@test.com"
  },
  {
    "productId": 2,
    "productName": "Garden Cart",
    "productCode": "GDN-0023",
    "releaseDate": new Date(2016,2,25),
    "description": {
      'descText': "15 gallon capacity rolling garden cart",
      "mfdYear": 2013
    },
    "price": 0,
    "starRating": 4,
    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png",
    "emailId": "test@test.com"
  },
  {
    "productId": 5,
    "productName": "Hammer",
    "productCode": "TBX-0048",
    "releaseDate": new Date(2016,2,25),
    "description": {
      'descText': "Curved claw steel hammer",
      "mfdYear": 2014
    },
    "price": 8.9,
    "starRating": 6,
    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png",
    "emailId": "test@test.com"
  },
  {
    "productId": 8,
    "productName": "Saw",
    "productCode": "TBX-0022",
    "releaseDate": new Date(2016,2,25),
    "description": {
      'descText': "15-inch steel blade hand saw",
      "mfdYear": 2017
    },
    "price": 11.55,
    "starRating": 1,
    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png",
    "emailId": "test@test.com"
  },
  {
    "productId": 10,
    "productName": "Video Game Controller",
    "productCode": "GMG-0042",
    "releaseDate": new Date(2016,2,25),
    "description": {
      'descText': "Standard two-button video game controller",
      "mfdYear": 2017
    },
    "price": 35.95,
    "starRating": 5,
    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png",
    "emailId": "test@test.com"
  }
];