import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'piper'
})
export class PiperPipe implements PipeTransform {

  transform(value: string, args: number): unknown {
    if (value.length > 100) {
      return value.slice(0, args) + "...";
    }
    else {
      return value;
    }
  }

}
