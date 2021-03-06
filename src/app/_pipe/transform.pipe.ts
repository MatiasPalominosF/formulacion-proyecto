import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform'
})
export class TransformPipe implements PipeTransform {

  transform(value: any) {
    if (!value) return "";
    else return value.toString().replace(/,/g, '.');
  }
}
