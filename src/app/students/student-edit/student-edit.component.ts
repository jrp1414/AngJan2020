import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from '../services/student.service';
import { Student } from '../models/Student';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styles: []
})
export class StudentEditComponent implements OnInit {

  studentForm: FormGroup;
  student: Student = new Student();
  studentId: number;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private ss: StudentService, private router: Router) {

  }

  ngOnInit() {
    this.studentForm = this.fb.group({
      FirstName: ["", Validators.required],
      LastName: "",
      MobileNo: "",
      EmailId: ["", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      Address: this.fb.group({
        AddLine1: "",
        AddLine2: "",
        AddLine3: "",
        City: "",
        State: ""
      })
    });


    this.route.params.subscribe((paramList) => {
      this.studentId = +paramList["id"];
      if (this.studentId != 0) {
        if ((!this.ss.student) || (this.ss.student && this.ss.student.StudentId !== this.studentId)) {
          this.ss.GetStudentDetails(this.studentId).subscribe((resp) => {
            this.student = <Student>resp;
            this.ss.student = this.student;
            // this.studentForm.setValue(this.student);
            this.studentForm.patchValue(this.student);
          });
        } else {
          this.student = this.ss.student;
          this.studentForm.patchValue(this.student);
        }
      }

    });

  }


  OnSubmit() {
    if (this.studentId > 0) {
      this.student = this.studentForm.value;
      this.student.StudentId = this.studentId;
      this.ss.UpdateStudent(this.student).subscribe((resp) => {
        this.router.navigateByUrl("students");
      });
    } else {
      this.ss.AddStudent(<Student>this.studentForm.value).subscribe((resp) => {
        this.router.navigateByUrl("students");
      });
    }
  }
}

function ValidateAge(control: AbstractControl): null | { [key: string]: boolean } {
  if (control.value >= 18 && control.value <= 40) {
    return null;
  }
  return { age: true };
}

function rangeValidator(minValue: number, maxValue: number): ValidatorFn {
  return function (control: AbstractControl): null | { [key: string]: boolean } {
    if (control.value >= minValue && control.value <= maxValue) {
      return null;
    }
    return { range: true };
  }
}
