import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { databaseURL } from "./api.congif";

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  constructor(private _http: HttpClient) { }
  getUserData(): Observable<any>{
    return this._http.get(`${databaseURL}/users/-Mi6sfaKb47xNT_VbNGZ.json`); //TODO import user id from DB
  }

}
