import { Injectable } from '@angular/core';
import { Student } from '../models/Student';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  GetStudentsList() {
    return this.http.get("https://localhost:44319/GetStudents");
  }

  GetStudentDetails(id: number): Observable<any> {
    return this.http.get("https://localhost:44319/GetStudent/"+id);
  }

  AddStudent(student:Student){
    return this.http.post("https://localhost:44319/AddStudent",student);
  }

  UpdateStudent(student:Student){
    return this.http.put("https://localhost:44319/UpdateStudent",student);
  }

  DeleteStudent(id:number){
    return this.http.delete("https://localhost:44319/DeleteStudent/"+id);
  }
  
  student:Student;
}