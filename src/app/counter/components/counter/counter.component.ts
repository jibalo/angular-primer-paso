import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
             <h2>{{counter}}</h2>
             <button (click)="IncrementarBy(1)">+1</button>
             <button (click)="Reset()">Resetear</button>
             <button (click)="DecrementarBy(1)">-1</button>`
})

export class CounterComponent implements OnInit {
  public counter: number = 10;

  IncrementarBy(incremento:number):void {
     this.counter +=incremento;
  }
  DecrementarBy(decremento:number):void {
   this.counter -=decremento;
  }
  Reset():void {
   this.counter =10;
  }

  constructor() { }

  ngOnInit() { }
}
