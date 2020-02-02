import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { Student } from '../models/Student';
import { Observable, Observer, Subscription } from 'rxjs';

// import {Observable, Subscription} from "rxjs-compat";

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styles: []
})
export class StudentDetailsComponent implements OnInit,OnDestroy {
  constructor(public route:ActivatedRoute,public ss:StudentService,public router:Router) { }
  student:Student;
  numsSubscription:Subscription;
  

  ngOnInit() {
    this.route.params.subscribe((paramList)=>{
      this.student = this.ss.GetStudentDetails(+paramList["id"]);
    });

    // // Observable Examples
    // let numsObs= Observable.interval(1000).map((num)=>num*2);

    // this.numsSubscription= numsObs.subscribe((num)=>{
    //   console.log(num);
    // });

    // let sampleObs = Observable.create((obs:Observer<string>)=>{
    //  setTimeout(() => {
    //    obs.next("First Data Released");
    //  }, 2000); 
    //  setTimeout(() => {
    //   obs.next("Second Data Released");
    // }, 4000);
    // setTimeout(() => {
    //   obs.next("Third Data Released");
    // }, 6000);

    // setTimeout(() => {
    //   obs.error("Some Error Occured");
    // }, 7000);

    // setTimeout(() => {
    //   obs.complete();
    // }, 5000);
    // });

    // let sampleObsSubscription = sampleObs.subscribe((data)=>{console.log(data);},(error)=>{console.log(error)},()=>{sampleObsSubscription.unsubscribe();});

    
  }

  GoToEdit(){
    this.router.navigate([this.student.StudentId+"/edit"],{relativeTo:this.route.parent});
  }

  ngOnDestroy(): void {
    // this.numsSubscription.unsubscribe();
  }
}
