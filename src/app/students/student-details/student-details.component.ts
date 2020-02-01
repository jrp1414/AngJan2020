import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { Student } from '../models/Student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styles: []
})
export class StudentDetailsComponent implements OnInit {

  constructor(public route:ActivatedRoute,public ss:StudentService,public router:Router) { }
  student:Student;
  ngOnInit() {
    this.route.params.subscribe((paramList)=>{
      this.student = this.ss.GetStudentDetails(+paramList["id"]);
    });
  }

  GoToEdit(){
    this.router.navigate([this.student.StudentId+"/edit"],{relativeTo:this.route.parent});
  }

}
