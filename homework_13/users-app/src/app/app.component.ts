import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  template: `
  

<div>
<nav>
<ul>
<li><a [routerLink]="['Home']">Home</a></li>
<li><a [routerLink]="['users']">Users</a></li>
</ul>
</nav>
<router-outlet></router-outlet>
</div>

  `,
  styles: []
})
export class AppComponent {
  title = 'users-app';
  constructor(private usersService: UsersService) { 
        this.getUsersOnline();

  }
  ngOnInit() {
  }

  async getUsersOnline() {
    try {
      const users$ = this.usersService.getOnlineData();
      const usersData = await users$.toPromise();
      localStorage.usersData = JSON.stringify(usersData);
      this.usersService.emitValue(this.usersService.getCashedData());

      users$.subscribe().unsubscribe();
    } catch (error) {
      console.error(error);
    }


  }



}
