import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boldPipe'
})
export class BoldPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
