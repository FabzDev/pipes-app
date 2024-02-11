import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase',
})
export class ToggleCase implements PipeTransform {
  transform(value: string, upper: boolean = false, ...args: any[]) {
    console.log(args);
    return upper ? value.toUpperCase() : value.toLowerCase();
  }
}
