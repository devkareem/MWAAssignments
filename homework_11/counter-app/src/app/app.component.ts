import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  
<div>
<app-counter [componentCounterValue]="5" (onCount)="showLog($event)"></app-counter>
<div>Component Counter Value : = {{componentCounterValue}}</div>
</div>
<div>
<app-counter [componentCounterValue]="3" (onCount)="showLog2($event)"></app-counter>
<div>Component Counter Value : = {{componentCounterValue2}}</div>
</div>
<div>
<app-counter [componentCounterValue]="10" (onCount)="showLog3($event)"></app-counter>
<div>Component Counter Value : = {{componentCounterValue3}}</div>
</div>

  `,
  styles: []
})
export class AppComponent {
  title = 'counter-app';
  componentCounterValue:number;
  componentCounterValue2:number;
  componentCounterValue3:number;

  showLog(e:number){
    this.componentCounterValue=e;
  }
  showLog2(e:number){
    this.componentCounterValue2=e;
  }
  showLog3(e:number){
    this.componentCounterValue3=e;
  }
}
