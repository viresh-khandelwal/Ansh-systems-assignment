import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEmployees'
})
export class FilterEmployeesPipe implements PipeTransform {

  transform(value: any, args?: string): any {
    if(args){
      let filterText: string = args.toLowerCase(); 
      value = value.filter(
        (employee) => {
           if(employee.name.toLowerCase().indexOf(filterText) !== -1 || employee.address.city.toLowerCase().indexOf(filterText) !== -1){
             return true;
           }else{
             return false;
           }
        }
      )
    }
    return value;
  }

}
