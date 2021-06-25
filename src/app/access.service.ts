import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  constructor() { }

  getBackURL(): String{
    return "http://localhost:4200/";
  }

  getFrontURL(): String{
    return "http://localhost:4200/";
  }
}
