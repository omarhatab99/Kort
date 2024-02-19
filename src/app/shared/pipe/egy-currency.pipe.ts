import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Egy'
})
export class EgyCurrencyPipe implements PipeTransform {

  transform(value: any): unknown {
    value = value ? value : 0
    return `${value} ج.م` ;
  }

}
