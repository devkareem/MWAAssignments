import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdetailsComponent } from './userdetails.component';
import{UsersComponent} from './users.component';
import{ RouterModule,Routes} from '@angular/router'

@NgModule({
  declarations: [UsersComponent,UserdetailsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[UsersComponent,UserdetailsComponent],
  providers:[],
  // bootstrap:[UserdetailsComponent]
})
export class UsersModule { }
