import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{Routes, RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { UsersService } from './users.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';

const MY_ROUTES:Routes=[{path:'',redirectTo:'Home',pathMatch:'full'},
{path:'users',loadChildren:()=>import('./users/users.module').then(d=>d.UsersModule)},
{path:'Home',component:HomeComponent},
{path:'**',redirectTo:'Home'}];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,RouterModule.forRoot(MY_ROUTES)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
