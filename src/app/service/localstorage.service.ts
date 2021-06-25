import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }


  saveToStorage(name : string, value : string){
    localStorage.setItem(name,value);
  }

  getStorageItem(name : string) : any{
    return localStorage.getItem(name);
  }

  removeStorageItem(name : string){
    localStorage.removeItem(name);
  }

}
