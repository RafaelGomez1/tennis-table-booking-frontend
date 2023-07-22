import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserLogin} from "../models/login/UserLogin";
import {UserLoginResponse} from "../models/login/UserLoginResponse";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}
  private serverUrl = 'http://64.226.124.118:8080';

  signIn(userLogin: UserLogin, credentials: String): Observable<UserLoginResponse> {
    return this.http.post<UserLoginResponse>(`${this.serverUrl}/admins/sign-in`, userLogin,
      {headers: new HttpHeaders ({ Authorization: `Basic ${credentials}` })});
  }
}
