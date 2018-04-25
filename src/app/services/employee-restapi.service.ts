import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';


@Injectable()
export class EmployeeRestapiService {
  private employeeData ;
  constructor(
   private http:HttpClient
  ) { }

  getEmployeeData(): Observable<any> {
    return this.http.get('app/data/employee-data.json')
    .do((employeeData) => this.employeeData = employeeData);
  }

  postFormData(formData): Observable<any> {
   return this.http.post('#',formData);
  }

  filterEmployeeData(id): any {
     return this.employeeData.data.filter((employee) => employee.id == +(id)) ;
  }


  
}
