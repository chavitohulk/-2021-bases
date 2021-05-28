import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:  string = 'Contador App';
  numero: number =  10;
  base:   number=5;
  acumulado: number=5;

  resta():number {
    this.numero-=1;   
    if (this.numero <0){
      this.numero=0;
    }
    return this.numero;
  }

  acumula(param:number){
    this.acumulado+=param;
    if(this.acumulado<0){
      this.acumulado=0;
    }

  }
}
