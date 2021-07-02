import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NouveauMessageComponent } from './nouveau-message/nouveau-message.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  rec: any;
  MsgErr = '';
  liste: any;
  opened: boolean = false;


  constructor(private route: Router, private http: HttpClient, private dialog: MatDialog) { }

  setUserInLocalStorage(u: any): void {
    localStorage.setItem('userConnect', JSON.stringify(u));
  }

  setRecInLocalStorage(u: any): void {
    localStorage.setItem('recConnect', JSON.stringify(u));
  }

  getUserInLocalStorage(): any {
    this.user = localStorage.getItem('userConnect');
    return JSON.parse(this.user);
  }

  getRecInLocalStorage(): any {
    this.rec = localStorage.getItem('recConnect');
    return JSON.parse(this.rec);
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

  // Les redirections de navbar   [

  toggleSidenav(): boolean {
    return this.opened = !this.opened
  }

  fonction(): void {
    this.route.navigateByUrl('nav-prod');
    console.log('place holder fonction')
  }

  goMessagerie(): void {
    this.route.navigateByUrl('messagerie')
  }

  goEtal(): void {
    this.route.navigateByUrl('etal')
  }

  goMenuProd(): void {
    this.route.navigateByUrl('menu-prod')
  }

  //                              ]

  isConnected(): boolean {
    if (this.getUserInLocalStorage() == null) {
      return false;
    } else {
      return true;
    }
  }

  goBack(): void {
    this.route.navigateByUrl('login');
  }

  messagerie(): void {
    this.route.navigateByUrl('messagerie')
  }

  nouveauMessage(): any {
    const myDialog = this.dialog.open(NouveauMessageComponent)
  }

  goHomeCons(): any {
    this.route.navigateByUrl('menu-cons');
  }

  goHomeProd(): any {
    this.route.navigateByUrl('menu-prod');
  }

  goRechercheProd(): any {
    this.route.navigateByUrl('liste-prod');
  }
  goRechercheProduit(): any {
    this.route.navigateByUrl('etal-cons');
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
    this.user = this.getUserInLocalStorage();
    this.http.get('http://localhost:8082/person/' + '/produit/' + this.user.id + '/' + m.name + '/' + m.quantite + '/' + m.prix + '/' + m.description).subscribe({
      next: (data) => { this.liste = data },
      error: (err) => { console.log(err) }
    })
    this.MsgErr = 'Modification du produit impossible.'
  }

  supprimerProduit(m: any): void {
    this.user = this.getUserInLocalStorage();
    this.http.delete('http://localhost:8082/produit/person/' + this.user.id + '/' + m.name).subscribe({
      next: (data) => { this.liste = data},
      error: (err) => { console.log(err) }
    })
    this.MsgErr = 'Suppression du produit impossible.'

  }

  messageAdmin(m: any): void {
    this.user = this.getUserInLocalStorage();
    this.http.get('http://localhost:8082/getMessage/admin/' + this.user.id + '/' + m.message).subscribe({
      next: (data) => { this.liste = data },
      error: (err) => { console.log(err) }
    })
  }
}
