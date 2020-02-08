import { Injectable } from '@angular/core';
import { Student } from '../models/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  GetStudentsList(): Student[] {
    return this.students;
  }

  GetStudentDetails(id: number): Student {
    let student =  this.students.find((student) => student.StudentId == id);
    return student?student:new Student(0,"","","","",[],[],"email");
  }

  private students: Student[] = [
    {
      StudentId: 1, FirstName: "Ram", LastName: "Patil", MobileNo: "985896589658", EmailId: "ram@gmail.com",
      NotificationType:"email",
      Addresses:[
        { AddressId: 1, AddLine1: "Test", AddLine2: "Test", AddLine3: "Test", City: "Test", State: "Maharashtra" },
        { AddressId: 1, AddLine1: "Test", AddLine2: "Test", AddLine3: "Test", City: "Test", State: "Maharashtra" }
      ],Hobbies:[
        "Test 1",
        "Test 2"
      ]
    },
    {
      StudentId: 2, FirstName: "Ganesh", LastName: "Thorat", MobileNo: "985896589658", EmailId: "ganesh@gmail.com",
      Addresses:[{ AddressId: 1, AddLine1: "Test", AddLine2: "Test", AddLine3: "Test", City: "Test", State: "Delhi" }],Hobbies:[]      
    },
    {
      StudentId: 3, FirstName: "Sadashiv", LastName: "Darade", MobileNo: "985896589658", EmailId: "sadashiv@gmail.com",
      Addresses:[{ AddressId: 1, AddLine1: "Test", AddLine2: "Test", AddLine3: "Test", City: "Test", State: "Gujrat" }],Hobbies:[]
    }
  ];
}