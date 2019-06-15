import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../users.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UserGuard implements CanActivate {

    constructor(private usersService: UsersService, private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        const isExists = this.usersService.getUserByUuid(route.params['uuid']);

        if (!isExists) {
            this.router.navigate(['users']);
        }
        return true;
    }

    
}