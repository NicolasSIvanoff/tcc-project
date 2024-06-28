import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public userLogin(user: any): void {
    window.location.href = `/home`;
    return console.log(user)
  }
}
