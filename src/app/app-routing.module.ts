import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { PageNotfoundComponent } from './page-notfound/page-notfound.component';

const routes: Routes = [

  {path:'',component:AppComponent},
  {path:'**',component:PageNotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
