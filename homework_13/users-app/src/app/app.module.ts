import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{Routes, RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { UsersService } from './users.service';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { UserdetailsComponent } from './users/userdetails.component';
import { UsersModule } from './users/users.module';
import { HomeComponent } from './home.component';
import { UserDetailsGuard } from './users/userdetails.guard';

const MY_ROUTES:Routes=[{path:'',redirectTo:'Home',pathMatch:'full'},
{path:'users',component:UsersComponent,children:[{path:':uuid',component:UserdetailsComponent}]},
// {path:'users',component:UsersComponent,loadChildren:()=>import('./users/users.module').then(d=>d.UsersModule)},

{path:'Home',component:HomeComponent},
{path:'**',redirectTo:'Home'}];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,RouterModule.forRoot(MY_ROUTES),UsersModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
