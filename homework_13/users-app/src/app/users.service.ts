import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay,filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  emitter = new EventEmitter<Observable<Object>>();
  emitValue(value: Observable<Object>) {
    this.emitter.emit(value);
  }
  getOnlineData() {
    return this.http.get('https://randomuser.me/api/?results=10');
  }

  getCashedData(): Observable<any> {
    // const users$ = from(JSON.parse(localStorage.usersData));
    const users$ = Observable.create((observer) => {
      const result = JSON.parse(localStorage.usersData);
      observer.next(result);
      observer.complete();
    }).pipe(shareReplay(1));
    return users$;
  }

  getUserByUuid(uuid:string):boolean{
    const result = JSON.parse(localStorage.usersData);
    return (result.results.find(e=>e.login.uuid == uuid));
  }


}
