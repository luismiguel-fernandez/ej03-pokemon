import { Component } from '@angular/core';
import { BdPokemonService } from '../bd-pokemon.service';

@Component({
  selector: 'app-detalles-pokemon',
  templateUrl: './detalles-pokemon.component.html',
  styleUrls: ['./detalles-pokemon.component.css']
})
export class DetallesPokemonComponent {
  pokemon:any = null
  modoEdicion:boolean = false

  constructor(private bd:BdPokemonService) {
    this.modoEdicion = false
  }

  editarNombre() {
    this.modoEdicion = true
  }

  guardarNombre($event:any) {
    if ($event.key == "Enter") {
      this.pokemon.Name = $event.target.value
      this.modoEdicion = false
    }
  }

  getPokemonSeleccionado() {
    this.pokemon = this.bd.getPokemonSeleccionado()
    return this.pokemon
  }
}
