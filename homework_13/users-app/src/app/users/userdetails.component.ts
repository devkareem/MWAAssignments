import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-userdetails',
  template: `
    <p>
      userdetails works!
    </p>
{{user?.gender}}
<h1> User Details</h1>
<img src="{{user?.picture.large}}" />
<table>
<tr>
<td>Name : {{user?.name.title}} / {{user?.name.first}} {{user?.name.last}}</td><td>Gender : {{user?.gender}}</td><td>Email : {{user?.email}}</td><td>Phone :{{user?.phone}}</td>
</tr>
<tr>
<td>Cell : {{user?.cell}}</td><td>Address : {{user?.location.street}} - {{user?.location.city}} - {{user?.location.state}} - {{user?.location.postcode}}</td><td>Date of Birth : {{user?.dob.date}}</td><td>Age :{{user?.dob.age}}</td>
</tr>
</table>
  `,
  styles: []
})
export class UserdetailsComponent implements OnInit {

  uuid: string;
  user: Object;
  subscription:Subscription;
  constructor(private usersService: UsersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getParams();

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  getParams() {

    this.subscription = this.route.params.subscribe((params) => {
      this.uuid = params['uuid'];
      this.getCashed();
    });


  }

  async getCashed() {
    try {
      const users$ = this.usersService.getCashedData()
      const usersData = await users$.toPromise();
      const usersJson = JSON.parse(JSON.stringify(usersData));
      this.user =usersJson.results.find(e=>{return e.login.uuid == this.uuid});
      users$.subscribe().unsubscribe();
    } catch (error) {
      console.error(error);
    }
  }

}
