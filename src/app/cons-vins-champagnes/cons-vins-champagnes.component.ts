import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessService } from '../access.service';
import { AuthService } from '../auth.service';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-cons-vins-champagnes',
  templateUrl: './cons-vins-champagnes.component.html',
  styleUrls: ['./cons-vins-champagnes.component.css']
})
export class ConsVinsChampagnesComponent implements OnInit {
  
  constructor(private route: Router, private accessService: AccessService, public authService: AuthService, private http: HttpClient, public panierService: PanierService) { }

  user: any;
  liste: any;
  liste2: any;
  panier: any;
  opened: boolean = false;
  ngOnInit(): void {
    if (!this.authService.isCons(this.authService.getUserInLocalStorage().id)) {
      this.route.navigateByUrl('accueil');
    }
    this.getAllProduitBySousCategorie('Champagnes');
  }

  retourVinsMenu(): void {
    this.route.navigateByUrl('cons-vins');

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
          this.route.navigateByUrl('cons-vins');
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
