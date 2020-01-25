//imports

//Decorator/MetaData Section
//class


import { Component } from "@angular/core";

@Component({
    selector:"str-interpolation",
    templateUrl:"./stringInterpolation.component.html"
})
export class StringInterplationComponent {
str1:string="Test";
num1:number = 10;
bool1:boolean = false;
someVal=10;
imageSrc="https://www.peerbits.com/wp-content/uploads/2018/10/angular-virtual-scroll-drag-drop-main.jpg";

// GetName(val1:number,val2:number):number{
// return 25;
// }

/**
 *
 */
// constructor() {
//     console.log(this.GetName());
    
// }
GetName(){
    // throw "Test"; 
    // let prod = new Product();   
return "Ram";
}

}


// export class Product {
// }