import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoPokemonComponent } from './listado-pokemon/listado-pokemon.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { DetallesPokemonComponent } from './detalles-pokemon/detalles-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoPokemonComponent,
    PokemonComponent,
    DetallesPokemonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
