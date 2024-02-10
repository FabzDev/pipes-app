import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

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

  // KeyValue pipe
  public person = {
    name: "Alejandro",
    age: 1,
    address: "Milano, Italia"
  }

  // Async Pipe
  public obser: Observable<number> = interval(1000).pipe(
    tap(seg => console.log(seg)
    )
  );

  public prom: Promise<string> = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data')
      console.log('Tambien en consola tenemos data');
    }, 10000);
  })
}
