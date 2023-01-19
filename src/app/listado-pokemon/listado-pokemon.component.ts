import { Component } from '@angular/core';
import { BdPokemonService } from '../bd-pokemon.service';

@Component({
  selector: 'app-listado-pokemon',
  templateUrl: './listado-pokemon.component.html',
  styleUrls: ['./listado-pokemon.component.css']
})
export class ListadoPokemonComponent {

  constructor(private bd:BdPokemonService){}

  getPokemons() {
    return this.bd.getPokemons()
  }

  setPokemonSeleccionado(pok:any) {
    this.bd.setPokemonSeleccionado(pok)
  }

  getPokemonSeleccionado():any{
    if (this.bd.getPokemonSeleccionado())
      return this.bd.getPokemonSeleccionado()
    else
      return "Ninguno seleccionado"
  }
}
