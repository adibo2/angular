import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../../mock-pokemon-liste';
import { Pokemon } from '../../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent implements OnInit {
  constructor(private router: ActivatedRoute,private route:Router,private pokService:PokemonService){}
  //activated route est injecte dans mon comosant via le constructeur rendre le service route disponible dans le compnent
  pokemonList:Pokemon[]=POKEMONS;
  pokdetail:Pokemon | undefined;
  ngOnInit() {
    const pokemonId :string | null=this.router.snapshot.paramMap.get('id');

    if(pokemonId){
      this.pokdetail=this.pokService.getPokemonById(+pokemonId)

      // this.pokdetail=this.pokemonList.find(pokemon=>pokemon.id === +pokemonId);
    }
    else{
      console.log("makaynj");
    }
  }
  goBack(){
    this.route.navigate(['/pokemons'])
  

  }
  goToEditPokemon(pokemon:Pokemon){
    this.route.navigate(['edit/pokemons',pokemon.id])
  }

}
