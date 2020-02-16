import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { StudentService } from './student.service';
import { Injectable } from '@angular/core';


@Injectable()
export class StudentDetailsResolver implements Resolve<any>{
    constructor(private ss:StudentService,private router:Router) {
        
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let id = +route.params["id"];
        if (id > 0) {
            return this.ss.GetStudentDetails(id);
        } else {
            this.router.navigate(["edit"]);
        }
    }

}