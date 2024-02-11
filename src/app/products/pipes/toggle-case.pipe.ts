import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase',
})
export class ToggleCase implements PipeTransform {
  transform(value: string) {
    let strBuilder: string = '';
    for (let letter of value) {
      if (letter.match('[A-Z]')) {
        strBuilder += letter.toLowerCase();
      } else {
        strBuilder += letter.toUpperCase();
      }
    }
    return strBuilder;
  }
}
