import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models/item.model';

@Pipe({
  name: 'total',
  standalone: true
})
export class TotalPipe implements PipeTransform {

  transform(items: Item[]): number {
    return this.getTotal(items);
  }

  getTotal(items: Item[]) {
    return items.reduce((sum, item, index) => {
      sum =  sum + (item.price * item.quantity);

      if(item.attachments.length) {
        sum = sum + this.getTotal(item.attachments)
      }

      return sum;
    }, 0)
  }

}
