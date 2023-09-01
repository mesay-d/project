import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customeps'
})
export class CustomepsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
