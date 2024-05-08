import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor( private http: HttpClient) { }

  public createUser(user: any): Observable<any> {
    console.log(user)
    return this.http.post('http://localhost:3000/users', user)
  }
}
