import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../models/Student';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
students:Student[];
  constructor(private studentService:StudentService) {
    this.students = this.studentService.GetStudentsList();
   }

  ngOnInit() {
  } 

}

