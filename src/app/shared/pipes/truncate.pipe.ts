import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncatePipe',
  standalone: true
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, truncate: boolean): unknown {
    return truncate? value.substring(0, 200) : value;
  }

}
