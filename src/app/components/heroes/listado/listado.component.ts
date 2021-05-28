import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  heroes:string[]=['Thor','SpiderMan','Hulk','Chavo']

  //eliminado:string[] =[];
  eliminado:string="";

  eliminaHeroes(){
    console.log(`Eliminando ${this.heroes[0]}`)
   // this.eliminado = this.heroes.splice(0,1) || '';
    this.eliminado = this.heroes.shift() || '';
    
    //this.heroes.splice(0,this.heroes.length)
  }

  onSelect(hero:string){
     console.log(hero);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
