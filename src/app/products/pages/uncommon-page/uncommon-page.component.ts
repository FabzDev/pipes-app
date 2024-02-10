import { Component } from '@angular/core';

@Component({
  selector: 'pages-uncommon-page',
  templateUrl: './uncommon-page.component.html'
})
export class UncommonPageComponent {
public name: string = 'Fabio'
public gender: 'male' | 'female' = 'male'
public genderMap = {
  male : 'invitarlo',
  female: 'invitarla'
}

changeClient(){
  this.name = "Yulieth"
  this.gender = "female"

}

}
