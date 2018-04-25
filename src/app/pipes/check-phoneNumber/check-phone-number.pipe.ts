import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkPhoneNumber'
})
export class CheckPhoneNumberPipe implements PipeTransform {

  transform(value: string): any {
    value = isNaN(+value) ? 'NA' : value; 
    return value;
  }

}
