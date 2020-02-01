import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [StudentsListComponent, StudentDetailsComponent, StudentEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"students", component:StudentsListComponent, children:[
        {path:":id",component:StudentDetailsComponent},
        {path:":id/edit",component:StudentEditComponent}
      ]}
    ])
  ]
})
export class StudentsModule { }
