import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'Contador App';
  public numero: number = 5;
  public base: number = 5;
/*Primera forma de crear un contador

  sumar(){
    this.number +=1;
  }
  restar(){
    this.number -=1;
  }

primera forma de crear un contador*/


/*Segunda forma de crear un contador

  acumular(valor:number)
{
  this.numero += valor;
}

segunda forma de crear un contador*/

/*Tercera forma de crear un contador

acumular2(valor:number)
{
  this.numero += valor;
}

Tercera forma de crear un contador*/



}
