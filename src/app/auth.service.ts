import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  MsgErr = '';
  liste: any;


  constructor(private route: Router, private http: HttpClient) { }

  setUserInLocalStorage(u: any): void {
    localStorage.setItem('userConnect', JSON.stringify(u));
  }

  getUserInLocalStorage(): any {
    this.user = localStorage.getItem('userConnect');
    return JSON.parse(this.user);
  }

  verif(): void {
    if (this.getUserInLocalStorage() == null) {
      this.route.navigateByUrl('login');
      this.MsgErr = "Veuillez vous connecter"
    }
  }

  deconnexion(): void {
    localStorage.clear();
    this.route.navigateByUrl('login');
    this.MsgErr = 'À bientôt !'
  }

  isConnected(): boolean {
    if (this.getUserInLocalStorage() == null) {
      return false;
    } else {
      return true;
    }
  }

  goHomeCons(): any {
    this.route.navigateByUrl('menu-cons');
  }

  goRechercheProd(): any {
    this.route.navigateByUrl('liste-prod');
  }

  ajoutProduit(m: any): void {
    this.user = this.getUserInLocalStorage();
    this.http.get('http://localhost:8082/person/' + this.user.id + '/produit/' + m.name + '/' + m.quantite + '/' + m.prix + '/' + m.description).subscribe({
      next: (data) => { this.liste = data },
      error: (err) => { console.log(err) }
    })
    this.MsgErr = 'Ajout du produit impossible.'
  }

  modifierProduit(m: any): void {
    console.log('Ici on débute');
    this.user = this.getUserInLocalStorage();
    this.http.get('http://localhost:8082/person/' + '/produit/' + this.user.id + '/' + m.name + '/' + m.quantite + '/' + m.prix + '/' + m.description).subscribe({
      next: (data) => { this.liste = data },
      error: (err) => { console.log(err) }
    })
    this.MsgErr = 'Ajout du produit impossible.'
  }

  supprimerProduit(m: any): void {
    console.log('Ici on débute');
    this.user = this.getUserInLocalStorage();
    this.http.get('http://localhost:8082/person/' + '/produit/' + this.user.id + '/' + m.name + '/' + m.quantite + '/' + m.prix + '/' + m.description).subscribe({
      next: (data) => { this.liste = data },
      error: (err) => { console.log(err) }
    })
    this.MsgErr = 'Ajout du produit impossible.'

  }
}
