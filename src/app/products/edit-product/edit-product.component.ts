import { Component, OnInit, ViewChild, ViewChildren, HostListener } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ProductThumbnailComponent } from '../product-thumbnail/product-thumbnail.component';
import { QueryList } from '@angular/core/src/render3';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService, Product } from 'src/app/Services/services.index';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styles: [
    `
    input.ng-touched.ng-invalid{
      border:1px solid red;
      
    }
    `
  ]
})
export class EditProductComponent implements OnInit {

  product: Product;
  @ViewChild("form") form: NgForm;
  @ViewChildren(NgModel) ngModels: any;
  @ViewChildren(ProductThumbnailComponent) productThumbnail: any;

  @HostListener('contextmenu', ['$event']) onRightClick(event) {
    event.preventDefault();
  }

  constructor(private route: ActivatedRoute, private ps: ProductService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.product = this.ps.GetProductDetails(+params["id"]);
      setTimeout(() => {
        this.form.setValue({
          productName: this.product.productName,
          productCode: this.product.productCode,
          releaseDate: this.product.releaseDate.toString(),
          description: {
            descText: this.product.description.descText,
            mfdYear: this.product.description.mfdYear
          },
          price: this.product.price,
          starRating: this.product.starRating,
          imageUrl: this.product.imageUrl,
          emailId: this.product.emailId,
          notifications: false,
          havePromoCode: "yes"
        })
      }, 0);
    });
  }

  onSubmit(frm) {
    //console.log(frm);
    console.log(this.form);
    //console.log(this.ngModels);
    // console.log(this.productThumbnail);
  }
  DateChange(date) {
    console.log(date);
    this.product.releaseDate = new Date(date);
    console.log(this.product);
  }

}
