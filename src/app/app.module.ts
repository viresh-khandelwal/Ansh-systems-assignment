import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeRestapiService } from './services/employee-restapi.service';
import { FilterEmployeesPipe } from './pipes/filter-employees/filter-employees.pipe';
import { CheckPhoneNumberPipe } from './pipes/check-phoneNumber/check-phone-number.pipe';
import { Employee } from './models/employee.model';
import { ReactiveFormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeEditComponent,
    FilterEmployeesPipe,
    CheckPhoneNumberPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeRestapiService , FilterEmployeesPipe, Employee],
  bootstrap: [AppComponent]
})
export class AppModule { }
