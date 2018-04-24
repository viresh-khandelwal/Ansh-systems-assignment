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
  private originalList;
  private filterText = "";

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
        this.originalList = modifiedData;
        this.employeeData = employeeData;
        console.log(this.employeeData);
      },
      (error) => console.log(error)
    )
  }

  filterTable(event): void{
   let filterText: string = event.target.value.toLowerCase();
   // reset the list to initial list
   this.employeeData.data = this.originalList;
   //filter the list 
   this.employeeData.data = this.employeeData.data.filter(
     (employee) => {
        if(employee.name.toLowerCase().indexOf(filterText) !== -1 || employee.address.city.toLowerCase().indexOf(filterText) !== -1){
          return true;
        }else{
          return false;
        }
     }
   )
  }

}
