import {Component} from '@angular/core';

@Component({
  /*Abajo codigo copia de app.component.html*/

  selector: 'app-contador',
  template: `
  <h1>{{title}}</h1>
  <h3>La base es: <strong>{{base}}</strong></h3>
  <button (click)="acumular2(base)">+{{base}}</button>
  <span>{{numero}}</span>
  <button (click)="acumular2(-base)">-{{base}}</button>
  `
})
export class ContadorComponent{
  public title:string = 'Contador App';
  public numero: number = 5;
  public base: number = 5;
  acumular2(valor:number)
{
  this.numero += valor;
}
}
