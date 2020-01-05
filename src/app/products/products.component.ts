import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  // encapsulation:ViewEncapsulation.None
})
export class ProductsComponent {
  
  products: any[];
  constructor() {
    console.log(Colors.Blue);
    this.products = [
      {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
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
        "releaseDate": "March 18, 2016",
        // "description": {
        //     'descText': "15 gallon capacity rolling garden cart",
        //     "mfdYear": 2013
        // },
        "price": 0,
        "starRating": 4,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png",
        "emailId": "test@test.com"
      },
      {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
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
        "releaseDate": "May 15, 2016",
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
        "releaseDate": "October 15, 2015",
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
    this.tempProducts = this.products;
  }
  tempProducts: any[];
  filterText: string = "";
  FilterTextChanged(data) {
    this.filterText = data;
    this.products = this.tempProducts.filter(prod => prod.productName.toLowerCase().indexOf(this.filterText.toLowerCase())!=-1);
  }

  AddProduct(){
    this.tempProducts.push({
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "description": {
          'descText': "15 gallon capacity rolling garden cart",
          "mfdYear": 2013
      },
      "price": 0,
      "starRating": 4,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png",
      "emailId": "test@test.com"
    });

    // this.products.push({
    //   "productId": 2,
    //   "productName": "Garden Cart",
    //   "productCode": "GDN-0023",
    //   "releaseDate": "March 18, 2016",
    //   "description": {
    //       'descText': "15 gallon capacity rolling garden cart",
    //       "mfdYear": 2013
    //   },
    //   "price": 0,
    //   "starRating": 4,
    //   "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png",
    //   "emailId": "test@test.com"
    // });
  }



}









let data = [
  { name: "Ram", age: 10 },
  { name: "Ram2", age: 13 },
  { name: "Ram3", age: 12 },
  { name: "Ram4", age: 11 },
];
// for (let i = 0; i < data.length; i++) {
//   console.log(data[i]);
// }

// for (let index in data) {
//   console.log(data[index]);
// }

// data.forEach(element => {
//  console.log(element); 
// });

// for (let dat of data) {
//   console.log(dat.name);
// }


enum Colors{
  Red=100,
  Green,
  Blue
}