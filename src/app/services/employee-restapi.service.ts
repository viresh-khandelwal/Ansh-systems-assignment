import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmployeeRestapiService {

  constructor(
   private http:HttpClient
  ) { }

  getEmployeeData(): Observable<any> {
    return this.http.get('app/data/employee-data.json');
  }
}
