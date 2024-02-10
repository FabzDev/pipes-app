import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
})
export class BasicsPageComponent {
  public name: string = 'Alejandro Escobar';
  public date: Date = new Date();
short: string|undefined;

}
