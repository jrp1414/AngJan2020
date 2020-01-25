import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentEditComponent } from './student-edit/student-edit.component';

@NgModule({
  declarations: [StudentsListComponent, StudentDetailsComponent, StudentEditComponent],
  imports: [
    CommonModule
  ]
})
export class StudentsModule { }
