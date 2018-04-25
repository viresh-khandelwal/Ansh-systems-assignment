import { NgModule } from '@angular/core';
import { RouterModule , Route} from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

@NgModule({ 
  imports: [
    RouterModule.forRoot([
      { path: 'employees', component: EmployeesComponent },
      { path: 'employees/:id/edit',component: EmployeeEditComponent },
      { path: 'employees/add', component: EmployeeEditComponent },
      { path: '', redirectTo: 'employees', pathMatch: 'full' }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }