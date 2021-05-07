import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  @Input() 
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // cambiarNombre(event: any){
  //   console.log(event.target.value)
  // }
  
  
  // @Output() m fty42onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor(private DbzService: DbzService){}

  agregar(){
    if (this.nuevo.nombre.trim().length ===0){return}
    // this.onNuevoPersonaje.emit(this.nuevo)
    //console.log(this.personajes)
    this.DbzService.agregarNuevoPersonaje(this.nuevo)
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
