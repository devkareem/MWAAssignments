import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdetailsComponent } from './userdetails.component';
import{UsersComponent} from './users.component';
import{ RouterModule} from '@angular/router'
import { UserGuard } from './user.guard';

@NgModule({
  declarations: [UsersComponent,UserdetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'',component:UsersComponent,children:[{path:':uuid',component:UserdetailsComponent,canActivate:[UserGuard]}]}]),
    
  ],
  providers:[UserGuard],
  bootstrap:[UsersComponent]
})
export class UsersModule { }
