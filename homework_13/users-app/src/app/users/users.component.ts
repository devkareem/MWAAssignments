import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  template: `
    <p>
      users works!
    </p>
    <table>
    <tr> <td>Name</td> <td>Email</td> <td>Gender</td> <td>Details</td> </tr>
    <tr *ngFor="let user of (usersData$ | async)?.results"> 
    <td>{{user.name.title}} / {{user.name.first}} {{user.name.last}}</td>
     <td>{{user.email}}</td> 
     <td>{{user.gender}}</td>
      <td><a [routerLink]="[user.login.uuid]">Show</a></td> 
      </tr>
    </table>
    <router-outlet></router-outlet>

  `,
  styles: []
})
export class UsersComponent implements OnInit {
  usersData$:Observable<Object>;
subscription:Subscription;
  constructor(private usersService:UsersService) { }
  ngOnInit() {
    this.usersData$=this.usersService.getCashedData();
   this.subscription= this.usersService.emitter.subscribe(val=>this.usersData$=val);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
