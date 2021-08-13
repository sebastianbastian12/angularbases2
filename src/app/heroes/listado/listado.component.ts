import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

public heroes: string [] = ['Spiderman', 'Hulk', 'Ironman', 'Thor'];
public heroeBorrado:string =  '';

borrarHeroe(){
 this.heroeBorrado = this.heroes.shift() || '';

}


}
