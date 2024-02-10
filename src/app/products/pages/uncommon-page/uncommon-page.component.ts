import { Component } from '@angular/core';

@Component({
  selector: 'pages-uncommon-page',
  templateUrl: './uncommon-page.component.html',
})
export class UncommonPageComponent {
  //i18n Select
  public name: string = 'Fabio';
  public gender: 'male' | 'female' = 'male';
  public genderMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    this.name = 'Yulieth';
    this.gender = 'female';
  }

  //i18n Plural
  public clientes: string[] = [
    'Fabio',
    'Yulieth',
    'Alejandro',
    'FabioF',
    'Laura',
    'Giovanni',
  ];

  public clientesMap = {
    '=0' : 'no tenemos clientes',
    '=1' : 'tenemos 1 cliente',
    'other' : 'tenemos # clientes'
  }

  delClient() {
    this.clientes.shift();
  }
}
