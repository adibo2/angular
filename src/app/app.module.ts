import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { PokemonModule } from './pokemon/pokemon.module';


@NgModule({
  declarations: [
    AppComponent,
    // BorderCardDirective,
    // PokemonTypePipe,
    // ListPokemonComponent,
    // DetailPokemonComponent,
    PageNotfoundComponent,
  ],
  imports: [
    BrowserModule,
    PokemonModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
