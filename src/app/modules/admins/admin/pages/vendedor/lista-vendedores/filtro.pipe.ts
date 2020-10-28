import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {
  transform(value: any, args: any): any {
    if (args === '') return value;

    const resultItems = [];
    for (const item of value) {
      if (item.nit.toLowerCase().indexOf(args.toLowerCase()) > -1) {
        resultItems.push(item);
      }
    }

    return resultItems;
  }
}
