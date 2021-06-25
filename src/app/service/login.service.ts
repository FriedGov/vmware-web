import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import LoginInfo from "../models/LoginInfo";
import SessionResponse from "../models/SessionResponse";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:8080/auth";


  constructor(private http: HttpClient) {
  }

  public login(loginInfo : LoginInfo) : Observable<SessionResponse>{
    return this.http.post<SessionResponse>(this.url, loginInfo);
  }



}

