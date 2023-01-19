import { Component } from '@angular/core';
import { BdPokemonService } from '../bd-pokemon.service';

@Component({
  selector: 'app-detalles-pokemon',
  templateUrl: './detalles-pokemon.component.html',
  styleUrls: ['./detalles-pokemon.component.css']
})
export class DetallesPokemonComponent {
  pokemon:any = null

  constructor(private bd:BdPokemonService) {
    this.pokemon = this.getPokemonSeleccionado()
  }

  getPokemonSeleccionado() {
    return this.bd.getPokemonSeleccionado()
  }
}
