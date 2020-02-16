import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentService } from './student.service';

@Injectable()
export class StudentGuard implements CanActivate {

  constructor(private ss: StudentService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(route);
    let id = +route.params["id"];
    if (id > 0) {
      this.ss.GetStudentDetails(id).subscribe(data => {
        if (data) {
          return true;
        }
        
      });
    }
    return false;
  }

}
