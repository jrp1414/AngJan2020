import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'twoway-binding',
  templateUrl: './twoway-binding.component.html',
  styleUrls: ['./twoway-binding.component.css']
})
export class TwowayBindingComponent {

  constructor() { }
  OneWayTestVal:string;
  OneWayChange(data){
    this.OneWayTestVal = data.target.value;
  }

  OneWayFailTest(){
    this.OneWayTestVal = "Some Value";
  }

  TwoWayTestVal:string;
  TwoWayChange(data){
    this.TwoWayTestVal = data;
    // console.log(data);
  }

  TwoWayPassTest(){
    this.TwoWayTestVal = "Some Value Two Way";
  }

}
