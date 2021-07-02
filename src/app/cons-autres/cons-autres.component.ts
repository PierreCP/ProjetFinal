import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessService } from '../access.service';
import { AuthService } from '../auth.service';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-cons-autres',
  templateUrl: './cons-autres.component.html',
  styleUrls: ['./cons-autres.component.css']
})
export class ConsAutresComponent implements OnInit {

  constructor(private route: Router, public authService: AuthService, private http: HttpClient, private accessService: AccessService, private panierService: PanierService) { }
  panier: any;
  liste2: any;
  user: any;
  liste: any;
  opened: boolean = false;

  ngOnInit(): void {
    this.getAllProduitBySousCategorie('Autres');
  }
  retourEtal(): void {
    this.route.navigateByUrl('etal-cons');

  }
  
  toggleSidenav(): boolean {
    return this.opened = !this.opened
  }

  getAllProduitBySousCategorie(sousCategorie: String): void {
    this.user = this.authService.getUserInLocalStorage();
    this.http.get(this.accessService.getBackURL() + 'produit/sous_categorie/' + sousCategorie).subscribe({
      next: (data) => {
        this.liste = data;
        if (this.liste == "") {
          this.route.navigateByUrl('etal-cons');
        }

      },
      error: (err) => { console.log(err) }

    })
  }

  addProduitToPanier(idProd: any): any {
    this.panier = this.panierService.getPanierInLocalStorage();
    console.log(this.panier.id)
    this.http.get(this.accessService.getBackURL() + 'panier/produit/' + this.panier.id +'/'+idProd.id).subscribe({
      next: (data) => {this.liste2=data},
      error: (err) => (console.log(err))
    })
    
    
  }
}
