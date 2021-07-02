import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  panier: any;
  constructor() { }

  getPanierInLocalStorage(): any {
    this.panier = localStorage.getItem('panier');
    return JSON.parse(this.panier);
  }
}
