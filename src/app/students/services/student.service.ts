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
    return this.students.find((student) => student.StudentId == id);
  }

  students: Student[] = [
    {
      StudentId: 1, FirstName: "Ram", LastName: "Patil", MobileNo: "985896589658", EmailId: "ram@gmail.com",
      Address: { AddressId: 1, AddLine1: "Test", AddLine2: "Test", AddLine3: "Test", City: "Test", State: "Maharashtra" }
    },
    {
      StudentId: 2, FirstName: "Ganesh", LastName: "Thorat", MobileNo: "985896589658", EmailId: "ganesh@gmail.com",
      Address: { AddressId: 1, AddLine1: "Test", AddLine2: "Test", AddLine3: "Test", City: "Test", State: "Delhi" }
    },
    {
      StudentId: 3, FirstName: "Sadashiv", LastName: "Darade", MobileNo: "985896589658", EmailId: "sadashiv@gmail.com",
      Address: { AddressId: 1, AddLine1: "Test", AddLine2: "Test", AddLine3: "Test", City: "Test", State: "Gujrat" }
    }
  ];
}