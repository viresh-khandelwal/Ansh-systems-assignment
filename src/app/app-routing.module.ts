import { NgModule } from '@angular/core';
import { RouterModule , Route} from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

@NgModule({ 
  imports: [
    RouterModule.forRoot([
      { path: ':id/edit',component: EmployeeEditComponent },
      { path: 'add', component: EmployeeEditComponent },
      { path: '',  component: EmployeesComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }