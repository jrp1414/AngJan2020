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
export class StudentDetailsComponent implements OnInit, OnDestroy {
  constructor(public route: ActivatedRoute, public ss: StudentService, public router: Router) { }
  student: Student;
  numsSubscription: Subscription;


  ngOnInit() {
    // this.route.params.subscribe((paramList) => {
    //   let id = +paramList["id"];
    //   if (id > 0) {
    //     this.ss.GetStudentDetails(id).subscribe((resp) => {
    //       this.student = <Student>resp;
    //       this.ss.student = this.student;
    //     });
    //   } else {
    //     this.router.navigate(["edit"], { relativeTo: this.route });
    //   }

    // });

    this.route.data.subscribe(data=>{
      this.student = <Student>data.student;
    });
  }

  GoToEdit() {
    this.router.navigate([this.student.StudentId + "/edit"], { relativeTo: this.route.parent });
  }

  Delete(){
    this.ss.DeleteStudent(this.student.StudentId).subscribe(resp=>{
      this.router.navigateByUrl("students")
    });
  }

  ngOnDestroy(): void {
    // this.numsSubscription.unsubscribe();
  }
}
