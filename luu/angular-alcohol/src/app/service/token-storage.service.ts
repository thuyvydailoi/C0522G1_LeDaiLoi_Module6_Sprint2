import {Injectable} from '@angular/core';
import {IUser} from '../model/i-user';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})

export class TokenStorageService {

  constructor() {
  }

  signOut() {
    window.localStorage.clear();
    window.sessionStorage.clear();
  }

  logOut() {
    window.sessionStorage.clear();
    window.localStorage.clear();
  }

  public saveUserLocal(user: any) {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public saveUserSession(user: any) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    if (localStorage.getItem(USER_KEY) !== null) {
      return JSON.parse(localStorage.getItem(USER_KEY));
    } else {
      return JSON.parse(sessionStorage.getItem(USER_KEY));
    }
  }

  public saveUser(user: IUser) {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  // public saveUserSession(user: any) {
  //   window.sessionStorage.removeItem(USER_KEY);
  //   window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  // }
  //
  // public getUser() {
  //   if (localStorage.getItem(USER_KEY) !== null) {
  //     return JSON.parse(localStorage.getItem(USER_KEY));
  //   } else {
  //     return JSON.parse(sessionStorage.getItem(USER_KEY));
  //   }
  // }
  //
  // public saveUser(user: IUser) {
  //   window.localStorage.removeItem(USER_KEY);
  //   window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  // }
  //
  // saveUserLocal(user: any) {
  //   window.localStorage.removeItem(USER_KEY);
  //   window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  // }
  //

}
