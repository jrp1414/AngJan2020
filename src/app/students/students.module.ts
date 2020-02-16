import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http"
import { StudentDetailsResolver } from './services/student-details.resolver';
import { StudentGuard } from './services/student.guard';

@NgModule({
  declarations: [StudentsListComponent, StudentDetailsComponent, StudentEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: "students", component: StudentsListComponent, children: [
          {
            path: ":id", component: StudentDetailsComponent,
            resolve:{student:StudentDetailsResolver},
            canActivate:[StudentGuard]
          },
          { path: ":id/edit", component: StudentEditComponent }
        ]
      }
    ])
  ],
  providers:[StudentDetailsResolver,StudentGuard]
})
export class StudentsModule { }
