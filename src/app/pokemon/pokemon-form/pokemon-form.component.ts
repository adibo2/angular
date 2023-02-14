import { Component,Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/pokemon';
import { PokemonService } from '../pokemon.service';
@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls:['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon:Pokemon ;
  //lorsque on utilise app-pokemon-form vous devriez me passer pokemon en entree
  types: string[]
  constructor(private pokservice:PokemonService,
    private router:Router){

  }  
  ngOnInit(){    
    // this.types=this.pokservice.getPokemonList();
    this.types=this.pokservice.getPokemontypeList()
  }
  hasType(type:string):boolean {
    return this.pokemon.types.includes(type);

  }
  selectType($event:Event,type:string){
    //event si il a decocher ou acicher ou quel type feu 
    const isChecked:boolean=($event.target as HTMLInputElement).checked
    if(isChecked){
      this.pokemon.types.push(type)
    }
    else{
      const index=this.types.indexOf(type);

      this.pokemon.types.splice(index,1)
    }

  }
  isTypesValid(type:string) :Boolean{
    if(this.pokemon.types.length===1 && this.hasType(type)){
      return false;
    }
    if(this.pokemon.types.length > 2 && !this.hasType(type)){
      return false
    }


    return true

  }
  onSubmit(){
    this.router.navigate(["/pokemons",this.pokemon.id])

  }

}
