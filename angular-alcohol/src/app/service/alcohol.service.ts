import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {IAlcoholDto} from '../dto/i-alcohol-dto';
import {AlcoholType} from '../model/alcohol-type';



@Injectable({
  providedIn: 'root'
})
export class AlcoholService {

  private API_ALCOHOL = environment.api_url;

  constructor(private http: HttpClient) {
  }

  getAllAlcohol(page: number, nameSearch: string): Observable<IAlcoholDto[]> {
    return this.http.get<IAlcoholDto[]>(this.API_ALCOHOL + 'alcohol/list?page=' + page + '&nameSearch=' + nameSearch);
  }

  getAllAlcoholType(): Observable<AlcoholType[]> {
    return this.http.get<IAlcoholDto[]>(this.API_ALCOHOL + 'alcohol/type-list');
  }
}