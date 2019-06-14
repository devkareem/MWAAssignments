import {CanActivate,RouterStateSnapshot,ActivatedRouteSnapshot,Router}from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import { UsersService } from '../users.service';

export class UserDetailsGuard implements CanActivate{

    constructor(private usersService:UsersService, private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean>{
        const isExists = this.usersService.getUserByUuid(route.params['uuid']);
        if(!isExists){
            this.router.navigate(['users']);
        }
        return isExists;
        }
}