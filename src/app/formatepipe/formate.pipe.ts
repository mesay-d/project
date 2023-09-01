import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formate'
})
export class FormatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
