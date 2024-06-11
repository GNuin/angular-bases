import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
<h3>Mi contador : {{counter}}</h3>
<button (click)="increaseBy(-1)">-1</button>
<button (click)="reset()">Reset</button>
<button (click)="increaseBy(+1)">+1</button>
  `
})

export class CounterComponent {
  constructor() {}
  public counter : number = 10;

  public increaseBy(value:number):void {
    this.counter+= value;
  };
  public reset(){
    this.counter = 10
  };
}
