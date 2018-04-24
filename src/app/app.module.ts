import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeRestapiService } from './services/employee-restapi.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeeRestapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
