import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { AccessService } from '../access.service';
import { AffichageProdService } from '../affichage-prod.service';
import { AuthService } from '../auth.service';
import { ImageChangerComponent } from '../image-changer/image-changer.component';
import { NewProdUploaderComponent } from '../new-prod-uploader/new-prod-uploader.component';
import { PanierService } from '../panier.service';
import { ProducteurService } from '../producteur.service';

@Component({
  selector: 'app-mur-producteur',
  templateUrl: './mur-producteur.component.html',
  styleUrls: ['./mur-producteur.component.css']
})
export class MurProducteurComponent implements OnInit {

  panier: any;
  liste2: any;
  producteur: any;
  produit: any;
  Type = "";
  constructor(private http: HttpClient, public authService: AuthService, private producteurService: ProducteurService, public affichageProd: AffichageProdService, private access: AccessService, private dialog: MatDialog, public route: Router, private panierService: PanierService) { }


  ngOnInit(): void {
    this.http.get(this.access.getBackURL() + 'person/type/' + this.authService.getUserInLocalStorage().id, { responseType: 'text' }).subscribe({
      next: (data) => {
        this.Type = data;
      }
    });
    this.producteur = this.authService.getProdInLocalStorage();
    this.getProductFromProducteur();
  }

  getProductFromProducteur(): void {
    this.http.get(this.access.getBackURL() + 'producteur/produit/' + this.producteur.id).subscribe({
      next: (data) => (this.produit = data),
      error: (err) => (console.log(err))
    });
  }

  changeFormatMedia(media: any): any {
    return window.atob(media);
  }

  mediaExist(media: any): boolean {
    if (media != null) {
      return true;
    }
    else {
      return false;
    }
  }

  refresh(): void {
    this.ngOnInit();
  }

  contact(): void {
    this.authService.nouveauMessage();
  }

  nouveauProduit(): any {
    const reception = this.dialog.open(NewProdUploaderComponent);
  }

  addImage(p: any): any {
    this.authService.setProduitForBlobInLocalStorage(p);
    const myDialog = this.dialog.open(ImageChangerComponent);
  }

  addProduitToPanier(idProd: any): any {
    this.panier = this.panierService.getPanierInLocalStorage();
    console.log(this.panier.id)
    this.http.get(this.access.getBackURL() + 'panier/produit/' + this.panier.id +'/'+idProd.id).subscribe({
      next: (data) => {this.liste2=data},
      error: (err) => (console.log(err))
    })
    
    
  }

}
