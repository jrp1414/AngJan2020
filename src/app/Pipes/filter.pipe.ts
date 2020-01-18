import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], propName:string,filterText): any {
    return value.filter(obj => obj[propName].toLowerCase()
                          .indexOf(filterText.toLowerCase()) != -1);
  }

}
