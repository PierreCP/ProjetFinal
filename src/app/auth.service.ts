import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NouveauMessageComponent } from './nouveau-message/nouveau-message.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  MsgErr = '';
  liste: any;


  constructor(private route: Router, private http: HttpClient, private dialog: MatDialog ) { }

  setUserInLocalStorage(u: any): void{
    localStorage.setItem('userConnect', JSON.stringify(u));
  }

  getUserInLocalStorage(): any{
    this.user = localStorage.getItem('userConnect');
    return JSON.parse(this.user);
  }

  verif(): void{
    if (this.getUserInLocalStorage() == null) {
      this.route.navigateByUrl('login');
      this.MsgErr = "Veuillez vous connecter"
    }
  }

  deconnexion(): void{
    localStorage.clear();
    this.route.navigateByUrl('login');
    this.MsgErr = 'À bientôt !'
  }

  isConnected(): boolean{
    if (this.getUserInLocalStorage() == null) {
      return false;
    } else {
      return true;
    }
  }

  goBack(): void{
    this.route.navigateByUrl('login');
  }

  messagerie(): void{
    this.route.navigateByUrl('messagerie')
  }

  nouveauMessage(): any{
    const myDialog = this.dialog.open(NouveauMessageComponent)
  }

}
