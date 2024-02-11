import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase',
})
export class ToggleCase implements PipeTransform {
  transform(value: string, upper: boolean = false, ...args: any[]) {
    console.log(args);
    return upper ? value.toUpperCase() : value.toLowerCase();
  }

  // transform(value: string) {
  //   let strBuilder: string = '';
  //   for (let letter of value) {
  //     if (letter.match('[A-Z]')) {
  //       strBuilder += letter.toLowerCase();
  //     } else {
  //       strBuilder += letter.toUpperCase();
  //     }
  //   }
  //   return strBuilder;
  // }
}
