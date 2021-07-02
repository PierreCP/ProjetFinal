import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  panier: any;
  user: any;
  rec: any;
  MsgErr = '';
  liste: any;
  constructor(private route: Router, private http: HttpClient) { }

  getPanierInLocalStorage(): any {
    this.panier = localStorage.getItem('panier');
    return JSON.parse(this.panier);
  }


}
