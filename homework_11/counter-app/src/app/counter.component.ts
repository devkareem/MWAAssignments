import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
      <div>
      <button id="decrease" (click)="count($event)">-</button>
      {{componentCounterValue}}
      <button id="increase" (click)="count($event)">+</button>
      </div>
 
  `,
  styles: []
})
export class CounterComponent implements OnInit {
  @Input() componentCounterValue;
  @Output() onCount: EventEmitter<number> ;
  constructor() {
    this.onCount=new EventEmitter();
  }

  ngOnInit() {
    this.componentCounterValue = (this.componentCounterValue) ? this.componentCounterValue : 0;
    this.onCount.emit(this.componentCounterValue)

  }
  count(e) {
    this.componentCounterValue = (e.target.id === "decrease") ? this.componentCounterValue - 1 : this.componentCounterValue + 1;
    this.onCount.emit(this.componentCounterValue)
    return false;
  }

}
