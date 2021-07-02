import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessService } from '../access.service';
import { AuthService } from '../auth.service';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-cons-fruits-pomes',
  templateUrl: './cons-fruits-pomes.component.html',
  styleUrls: ['./cons-fruits-pomes.component.css']
})
export class ConsFruitsPomesComponent implements OnInit {

  constructor(private route: Router, public authService: AuthService, private http: HttpClient, private accessService: AccessService, private panierService: PanierService) { }
  panier: any;
  liste2: any;
  user: any;
  opened: boolean = false;
  liste: any;
  ngOnInit(): void {
    this.getAllProduitBySousCategorie('Pommes et poires');
  }

  retourFruitsMenu(): void {
    this.route.navigateByUrl('cons-fruits');
  }

  getAllProduitBySousCategorie(sousCategorie: String): void {
    this.user = this.authService.getUserInLocalStorage();
    this.http.get(this.accessService.getBackURL() + 'produit/sous_categorie/' + sousCategorie).subscribe({
      next: (data) => {
        this.liste = data;
        if (this.liste == "") {
          this.route.navigateByUrl('cons-fruits');
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
