import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
// @ts-ignore
import {IUser} from '../model/i-user';
// @ts-ignore
import {TokenStorageService} from './token-storage.service';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = 'http://localhost:8080/api/login';
  private FIND_USERNAME_URL = 'http://localhost:8080/api/login';

  httpOptions: any;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.baseURL);
  }

  login(obj: { username: string; password: string; }): Observable<any> {
    return this.http.post(this.baseURL , {
      username: obj.username,
      password: obj.password
    }, this.httpOptions);
  }
}
