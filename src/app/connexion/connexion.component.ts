import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AccessService } from '../access.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  user: any;
  MsgErr = '';
  Type = '';
  idPa: any;

  constructor(private http: HttpClient, private route: Router, public authService: AuthService, private access: AccessService) { }

  ngOnInit(): void {
    if (this.authService.isConnected()) {
      this.user = this.authService.getUserInLocalStorage();
      this.http.get(this.access.getBackURL() + 'person/type/' + this.user.id, { responseType: 'text' }).subscribe({
        next: (data) => {
          this.Type = data;
          console.log(this.Type);
          if (this.Type == "Admin") {
            this.route.navigateByUrl('menu-admin');
          }
          else if (this.Type == "Producteur") {
            this.route.navigateByUrl('menu-prod');
          }
          else if (this.Type == "Consommateur") {
            this.route.navigateByUrl('menu-cons');
          }
        }
      });
    }
  }

  connexion(u: any): void {
    this.http.post(this.access.getBackURL() + 'login', u).subscribe({
      next: (data) => {
        this.user = data;
        if (this.user != null) {
          this.authService.setUserInLocalStorage(this.user);
          this.http.get(this.access.getBackURL() + 'person/type/' + this.user.id, { responseType: 'text' }).subscribe({
            next: (data) => {
              this.Type = data;
              console.log(this.Type);
              if (this.Type == "Admin") {
                this.route.navigateByUrl('nav-admin');
              }
              else if (this.Type == "Producteur") {
                this.route.navigateByUrl('nav-prod');
              }
              else if (this.Type == "Consommateur") {
                this.route.navigateByUrl('menu-cons');
                this.getIdPanier();
                this.route.navigateByUrl('nav-cons');
              }
            }
          });
        } else {
          this.MsgErr = 'Identifiant ou mot de passe incorrect !'
        }
      },
      error: (err) => { console.log(err) }
    })
  }

  getIdPanier(): void {
    this.http.get(this.access.getBackURL() + 'panier/user/' + this.user.id).subscribe({
      next: (data) => { 
        this.idPa = data 
        let objPanier = JSON.stringify(this.idPa);
        localStorage.setItem('panier', objPanier)
      },
      error: (err) => { console.log(err) }
    })
    
  }

}
