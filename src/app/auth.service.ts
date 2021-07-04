import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NouveauMessageComponent } from './nouveau-message/nouveau-message.component';
import { ProducteurService } from './producteur.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;
  rec: any;
  prod: any;
  idforblob: any;
  produitforblob: any;
  MsgErr = '';
  liste: any;
  opened: boolean = false;


  constructor(private route: Router, private http: HttpClient, private dialog: MatDialog, private producteurService: ProducteurService) { }

  setUserInLocalStorage(u: any): void {
    localStorage.setItem('userConnect', JSON.stringify(u));
  }

  setRecInLocalStorage(u: any): void {
    localStorage.setItem('recConnect', JSON.stringify(u));
  }

  setProdInLocalStorage(u: any): void {
    localStorage.setItem('prodConnect', JSON.stringify(u));
  }

  setIdForBlobInLocalStorage(i: any): any {
    localStorage.setItem('inMemoryIdForBlob', i);
  }

  setProduitForBlobInLocalStorage(p: any): any {
    localStorage.setItem("inMemoryProduit", JSON.stringify(p));
  }

  getUserInLocalStorage(): any {
    this.user = localStorage.getItem('userConnect');
    return JSON.parse(this.user);
  }

  getRecInLocalStorage(): any {
    this.rec = localStorage.getItem('recConnect');
    return JSON.parse(this.rec);
  }

  getProdInLocalStorage(): any {
    this.prod = localStorage.getItem('prodConnect');
    return JSON.parse(this.prod);
  }

  getIdForBlobInLocalStorage(): any {
    this.idforblob = localStorage.getItem('inMemoryIdForBlob');
    return this.idforblob;
  }

  getProduitForBlobInLocalStorage(): any {
    this.produitforblob = localStorage.getItem('inMemoryProduit');
    return JSON.parse(this.produitforblob);
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

  goMessagerie(): void {
    this.route.navigateByUrl('messagerie');
    this.opened = false;
  }

  goModifProd(): void{
    this.route.navigateByUrl('modifier-prod');
    this.opened = false;
  }

  goMessagerieCons(): void {
    this.route.navigateByUrl('messagerie-cons');
    this.opened = false;
  }

  historiqueCommandes(){
    this.route.navigateByUrl('commandes-perso');
    this.opened = false;
  }

  goEtal(): void {
    this.route.navigateByUrl('etal');
    this.opened = false;
  }

  goMenuProd(): void {
    this.route.navigateByUrl('menu-prod');
    this.opened = false;
  }

  goMurProd():void {
  this.route.navigateByUrl('mur-prod');
  this.opened = false;
}

  RedirectionPanier(): void {
    this.route.navigateByUrl('panier');
    this.opened = false;
  }

  redirectionFicheProducteur(prdt: any): any{
    this.producteurService.producteur = prdt;
    this.route.navigateByUrl('mur');
    this.setRecInLocalStorage(prdt.person);
    this.setProdInLocalStorage(prdt);
    
    this.opened = false;
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
    
    this.opened = false;
  }

  messagerie(): void {
    this.route.navigateByUrl('messagerie');
    this.opened = false;
  }

  nouveauMessage(): any {
    const myDialog = this.dialog.open(NouveauMessageComponent)
  }

  goHomeCons(): any {
    this.route.navigateByUrl('menu-cons');
    this.opened = false;
  }

  goHomeProd(): any {
    this.route.navigateByUrl('menu-prod');
    this.opened = false;
  }

  goRechercheProd(): any {
    this.route.navigateByUrl('liste-prod');
    this.opened = false;
  }
  goRechercheProduit(): any {
    this.route.navigateByUrl('etal-cons');
    this.opened = false;
  }

  goModifCons(): void{
    this.route.navigateByUrl('modifier-cons');
    this.opened = false;
  }

  goPanier(): void{
    this.route.navigateByUrl('panier');
    this.opened = false;
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
