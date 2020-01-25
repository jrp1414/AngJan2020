import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product, ProductService } from 'src/app/Services/product.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styles: []
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit() {
    // this.product = this.productService.GetProductDetails(+this.route.snapshot.params["id"]);
    this.route.params.subscribe((paramlist)=>{
      this.product = this.productService.GetProductDetails(+paramlist["id"]);
      // console.log(paramlist["pName"]);
      // console.log(paramlist["pCode"]);
    });
  }

  GoBackToList() {
    // this.router.navigate(['/products']);
    console.log(this.router);
  }

}
