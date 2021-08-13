import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
  /*En declaraciones ponemos los componentes o pipes de nuestra aplicacion*/
  declarations:[
    HeroeComponent,
    ListadoComponent
  ],
  /*En los exports ponemos lo que deseamos hacer publico y que sea vea fuera de este modulo */
  exports:[
    ListadoComponent
  ],
  /*En los imports van los modulos*/
  imports:[
    /*CommonModule en los modulos ayuda a que las directivas esten disponible como *ngFor, *ngIf */
  CommonModule
  ]

})
export class HeroesModule{

}
