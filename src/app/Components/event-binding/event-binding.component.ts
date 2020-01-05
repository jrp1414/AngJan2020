import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  Val:string;
  constructor() { }

  ClickEventTest(){
    this.Val = "Some Value"+ new Date();
  }

  textBoxVal:string;
  InputChange(data){
    this.textBoxVal = data.target.value;
    // console.log(data);
  }
}
