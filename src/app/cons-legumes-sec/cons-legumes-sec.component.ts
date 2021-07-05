import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessService } from '../access.service';
import { AuthService } from '../auth.service';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-cons-legumes-sec',
  templateUrl: './cons-legumes-sec.component.html',
  styleUrls: ['./cons-legumes-sec.component.css']
})
export class ConsLegumesSecComponent implements OnInit {

  constructor(private route: Router, public authService: AuthService, private http: HttpClient, private accessService: AccessService, private panierService: PanierService) { }
  panier: any;
  liste2: any;
  user: any;
  opened: boolean = false;
  liste: any;
  ngOnInit(): void {
    if (!this.authService.isCons(this.authService.getUserInLocalStorage().id)) {
      this.route.navigateByUrl('accueil');
    }
    this.getAllProduitBySousCategorie('Haricots, pois, légumes secs, graines germées');
  }

  retourLegumesMenu(): void {
    this.route.navigateByUrl('cons-legumes');

  }

  getAllProduitBySousCategorie(sousCategorie: String): void {
    this.user = this.authService.getUserInLocalStorage();
    this.http.get(this.accessService.getBackURL() + 'produit/sous_categorie/' + sousCategorie).subscribe({
      next: (data) => {
        this.liste = data;
        if (this.liste == "") {
          this.route.navigateByUrl('cons-legumes');
        }

      },
      error: (err) => { console.log(err) }

    })
  }
  
  toggleSidenav(): boolean {
    return this.opened = !this.opened
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
