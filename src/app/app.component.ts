import { Component,OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-liste';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  //existe pas 
  templateUrl:'app-component.html',
  styles: [],
})
export class AppComponent implements OnInit  {
  title:Pokemon[] = POKEMONS;
  selectedindex: number;
  pokemonSlected:Pokemon | undefined;
  SearchPokemon:Pokemon[] | undefined;


  entredValue = '';

  ngOnInit(): void {
    console.table(this.title);
  }

  

  changNom(nom:Pokemon){
    nom.name=nom.name.toLowerCase()

  }
  selectIndex(event:MouseEvent){
    this.selectedindex=+(event.target as HTMLInputElement).value ;
    console.log(`the first element ${this.title[this.selectedindex].name}`);
  }

  changeNom(heading: HTMLElement) {
    heading.textContent = 'Adib';
  }
  //Number
  selectNumberPokemeon(pokemonId:string){
    const pokWant:Pokemon | undefined=this.title.find(poke=>poke.id === +pokemonId);
    if(pokWant){

      this.pokemonSlected=pokWant;
      console.log(`the pokemeon selected ${this.title[+pokemonId].name}`);
    }
    else{
      console.log(`Nothing`);

    }
  }

  selectTextPokemeon(event:KeyboardEvent){
    const searchWord = (event.target as HTMLInputElement).value;
    const text:Pokemon[] | undefined = this.title.filter((data)=>data.name.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase()));
    if(text){
      this.SearchPokemon=text;
      
    }
    else if(!event){
      console.log("Nothing here in search");
      this.SearchPokemon=[];
    }
  }

}



// }
// selectTextPokemeon(event:String){
//   const text:Pokemon[] | undefined = this.title.filter((data)=>data.name.toLocaleLowerCase().includes(event.toLocaleLowerCase()));
//   if(text){
//     this.SearchPokemon=text;
    
//   }
//   else{
//     console.log("Nothing here in search");
//   }
// } create me input take to text that user entred in the input in angular and use Selectevent

