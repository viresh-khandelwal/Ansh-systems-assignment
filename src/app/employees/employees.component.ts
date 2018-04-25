import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { EmployeeRestapiService } from '../services/employee-restapi.service';

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
        this.employeeData = employeeData;
      },
      (error) => console.log(error)
    )
  }

}
