import { Injectable } from '@angular/core';
import {LocalstorageService} from "./localstorage.service";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private TOKEN_NAME = "TOKEN_NAME";


  constructor(private localStorage : LocalstorageService) {

  }

  setToken(token : string){
    localStorage.setItem(this.TOKEN_NAME, token);
  }

  getToken() : string{
    let token = localStorage.getItem(this.TOKEN_NAME) as string;
    if(token){
      return token;
    }
    return "";
  }




}
