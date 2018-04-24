import { Component, OnInit } from '@angular/core';
import { EmployeeRestapiService } from '../services/employee-restapi.service';
import { Map } from 'rxjs/map';



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  private employeeData;
  constructor(
    private employeeRestapiService: EmployeeRestapiService
  ) { }

  ngOnInit() {
    this.employeeRestapiService.getEmployeeData().subscribe(
      (employeeData) => {
        //code to convert non numeric phone numbers to 'NA'
        let modifiedData = employeeData.data.map((employee) =>{
          employee.phone = isNaN(+employee.phone) ? 'NA' : employee.phone ; 
          return employee
        });
        employeeData.data = modifiedData;
        this.employeeData = employeeData;
        console.log(this.employeeData);
      },
      (error) => console.log(error)
    )
  }

}
