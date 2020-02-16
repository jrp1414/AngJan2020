import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../models/Student';
import { ActivatedRoute, Router, NavigationStart, ActivationStart } from '@angular/router';
import { filter } from "rxjs/operators";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit, OnDestroy {

  students: Student[] = [];
  constructor(private studentService: StudentService, private router: Router, private route: ActivatedRoute) {
    // this.studentService.GetStudentsList();

  }
  routerEventSubs: Subscription = new Subscription();
  ngOnInit() {

    // this.routerEventSubs = this.router.events.pipe(
    //   filter(event => event instanceof NavigationStart)
    // ).subscribe(nav => {
    //   console.log(nav);
    // });

    this.route.url.subscribe((data) => {
      this.studentService.GetStudentsList().subscribe((data) => {
        this.students = <Student[]>data;
      });
    });
  }

  ngOnDestroy(): void {
    // this.routerEventSubs.unsubscribe();
  }

}

