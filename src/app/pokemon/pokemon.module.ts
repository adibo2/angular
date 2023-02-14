import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PokemonTypePipe } from './pokemon-type.pipe';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';

const pokemonroutes: Routes = [
  {path:'edit/pokemons/:id',component:EditPokemonComponent},
  {path:'pokemons', component:ListPokemonComponent},
  {path:'pokemons/:id', component:DetailPokemonComponent},
];
@NgModule({
  declarations: [
    ListPokemonComponent,
    BorderCardDirective,
    DetailPokemonComponent,
    PokemonTypePipe,
    PokemonFormComponent,
    EditPokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonroutes)
  ],
  // providers:[PokemonService]
  //injecter un service au niveau d'un module mais pas
  //@Injectable({
//   providedIn: 'root'
  
// })
})
export class PokemonModule { }

// ng generate directive border-card   
// ng generate pipe pokemon-type   