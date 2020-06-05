import { Pipe, PipeTransform } from '@angular/core';
import { Group } from './models/Group';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Group[], query:string ): Group[] {
    return value.filter(el=>{
      if (!value || !query) {
        return [];
      }
      return el.name.toLowerCase().includes(query.toLowerCase());
    })
  }

}
