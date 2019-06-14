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
