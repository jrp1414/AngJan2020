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
  firstName: FormControl = new FormControl();
  lastName: FormControl = new FormControl();
  student: Student;
  hobbies: FormArray = this.fb.array([

  ]);
  addresses: FormArray = this.fb.array([

  ]);

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private ss: StudentService) { }

  ngOnInit() {
    // this.studentForm = new FormGroup({
    //   FirstName: this.firstName,
    //   LastName: this.lastName,
    //   MobileNo: new FormControl(),
    //   EmailId: new FormControl(),
    //   Address: new FormGroup({
    //     AddLine1: new FormControl(),
    //     AddLine2: new FormControl(),
    //     AddLine3: new FormControl(),
    //     City: new FormControl(),
    //     State: new FormControl()
    //   })
    // });
    this.route.params.subscribe((params) => {
      this.student = this.ss.GetStudentDetails(+params["id"]);
      this.studentForm = this.fb.group({
        FirstName: [this.student.FirstName, Validators.required],
        LastName: this.student.LastName,
        NotificationType: this.student.NotificationType,
        MobileNo: this.student.MobileNo,
        // Age: [0,ValidateAge],
        Age: [0,rangeValidator(15,30)],
        EmailId: [this.student.EmailId, [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      });

      for (const address of this.student.Addresses) {
        this.addresses.push(this.fb.group({
          AddLine1: address.AddLine1,
          AddLine2: address.AddLine2,
          AddLine3: address.AddLine3,
          City: address.City,
          State: address.State
        }));
      }

      this.studentForm.addControl("Addresses", this.addresses);
      for (const hobby of this.student.Hobbies) {
        this.hobbies.push(this.fb.control(hobby));
      }
      this.studentForm.addControl("Hobbies", this.hobbies);
    });

    this.studentForm.controls.NotificationType.valueChanges.subscribe((value) => {
      this.SetNotificationType(value);
    });

  }

  GetStduentAddress(student: Student) {
    let addresses = this.fb.array([]);
    return addresses;
  }

  SetNotificationType(type: string) {
    let mobileNo = this.studentForm.get("MobileNo");
    if (type == 'mobile') {
      mobileNo.setValidators(Validators.required);
    } else {
      mobileNo.clearValidators();
    }
    mobileNo.updateValueAndValidity();
  }

  AddHobby() {
    this.hobbies.push(this.fb.control(""));
  }

  AddAddress() {
    this.addresses.push(this.fb.group({
      AddLine1: "",
      AddLine2: "",
      AddLine3: "",
      City: "",
      State: ""
    }));
  }

  OnSubmit() {
    console.log(this.studentForm);
    // console.log(this.studentForm.value);
    // console.log(this.studentForm.controls);
  }

}

function ValidateAge(control: AbstractControl): null | { [key: string]: boolean } {
  if (control.value>=18 && control.value<=40) {
    return null;
  }
  return {age:true};
}

function rangeValidator(minValue:number,maxValue:number): ValidatorFn {
  return function (control: AbstractControl): null | { [key: string]: boolean } {
    if (control.value>=minValue && control.value<=maxValue) {
      return null;
    }
    return {range:true};
  }
}
