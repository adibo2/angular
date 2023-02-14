import { Injectable } from '@angular/core';
import { POKEMONS } from '../mock-pokemon-liste';
import { Pokemon } from '../pokemon';

@Injectable({
  providedIn: 'root'
  //utilise instance du service a toute application
  //on fournit le sevice a ensemble app grace au pokemon service
})
export class PokemonService {
  getPokemonList():Pokemon[]{
    console.log("awdi"+POKEMONS.map(pok=>pok.types));
    return POKEMONS;
  }
  
  getPokemonById(pokemonId:number):Pokemon | undefined{
    return POKEMONS.find(pokemon=> pokemon.id === pokemonId)

  }
  getPokemontypeList():string[]{
     const types:string[] = [];
    POKEMONS.forEach(pokemon => {
        pokemon.types.forEach(type => {
            if (!types.includes(type)) {
                types.push(type);
            }
        });
    });
    console.log(types);
    return types;
  }


}
// ng generate service pokemon/pokemon 