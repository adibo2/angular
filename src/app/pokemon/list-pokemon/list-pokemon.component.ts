import { Component } from '@angular/core';
import { Pokemon } from 'src/app/pokemon';
import { Router } from '@angular/router';
import { POKEMONS } from 'src/app/mock-pokemon-liste';
import { PokemonService } from '../pokemon.service';
import { OnInit } from '@angular/core'; 
@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent {
  title:Pokemon[]

  constructor(private route:Router,
    private pokService:PokemonService){}

    ngOnInit(){
      this.title=this.pokService.getPokemonList();

    }

  selectPokemon(poke:Pokemon){
    this.route.navigate(['/pokemons',poke.id])
  }

}
