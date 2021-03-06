import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroeComponent } from './components/heroes/heroe/heroe.component';
import { ListadoComponent } from './components/heroes/listado/listado.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent,
    ListadoComponent,    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
