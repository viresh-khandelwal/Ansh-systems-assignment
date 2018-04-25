import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeeRestapiService } from '../services/employee-restapi.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  private employee: Employee
  private employeeDetilsForm: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private employeeRestapiService: EmployeeRestapiService,
    private router: Router
  ) { }

  ngOnInit() {
    //console.log(this.activatedRoute.url);
    this.activatedRoute.params.subscribe(
      (params) => {
        if(!params.id){
          this.employee = new Employee();
        }else{
          this.employee = this.employeeRestapiService.filterEmployeeData(params.id)[0];
        }
        console.log(this.employee);
      });

    this.initializeForm(this.employee);
  }

  initializeForm(employee): void{
    this.employeeDetilsForm = new FormGroup ({
      employeeId: new FormControl(employee.id),
      name: new FormControl(employee.name,[Validators.required,Validators.minLength(4)]),
      phone: new FormControl(employee.phone,[Validators.required,Validators.pattern(/^\d+$/)]),
      city: new FormControl(employee.address.city),
      address_line1: new FormControl(employee.address.address_line1),
      address_line2: new FormControl(employee.address.address_line2),
      postal_code: new FormControl(employee.address.postal_code)
    });
  }


  submitForm(){
    if(this.employeeDetilsForm.status == "VALID"){
      this.employeeRestapiService.postFormData(this.employeeDetilsForm.value).subscribe(
        data => data
      );
      alert("form submitted");
      this.router.navigate(['/employees']);
    }else{
      alert("Please fill the form correctly , Name :  Required, Minimum length is 4 characters, Phone: Required, Numbers only ")
    };

  }

}
