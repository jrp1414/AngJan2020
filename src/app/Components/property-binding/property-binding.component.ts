import { Component} from '@angular/core';

@Component({
  selector: 'property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
  imageSrc="https://www.peerbits.com/wp-content/uploads/2018/10/angular-virtual-scroll-drag-drop-main.jpg";
  imageHeight:number=100;
  imageWidth:number=100;
  isButtonDisabled=true;

  constructor() {
    console.log(this.imageHeight);
   setTimeout(()=>{
     this.isButtonDisabled = false;
   }, 3000);

  //  setTimeout(()=>{
  //   console.log(this.imageHeight);
  //   this.imageHeight = 35;
  //   console.log(this.imageHeight);
  // }, 1000);
   
  }

  getImageHeight(){
    return 150;
  }


}
