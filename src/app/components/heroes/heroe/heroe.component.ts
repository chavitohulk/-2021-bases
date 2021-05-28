import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  
})
export class HeroeComponent implements OnInit {

  nombre:  string = 'Ironman';
  edad:    number =  45;

  get nombreCapitalizado():string{
    return this.nombre.toUpperCase();
  }

  obtenerNombre(){
    return `Su nombre es ${this.nombre} con ${this.edad} años`
  }

  cambiarNombre():void {
    this.nombre='Spiderman'
  }

  cambiarEdad():void{
     this.edad=30;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
