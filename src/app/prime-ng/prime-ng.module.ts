import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuModule } from 'primeng/menu';



@NgModule({
  declarations: [

  ],
  imports: [
    BrowserAnimationsModule,
    MenuModule,
  ],
  exports: [
    BrowserAnimationsModule,
    MenuModule,
  ]
})
export class PrimeNgModule { }
