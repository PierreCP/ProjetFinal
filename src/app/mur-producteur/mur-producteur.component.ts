import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccessService } from '../access.service';
import { AffichageProdService } from '../affichage-prod.service';
import { AuthService } from '../auth.service';
import { ProducteurService } from '../producteur.service';

@Component({
  selector: 'app-mur-producteur',
  templateUrl: './mur-producteur.component.html',
  styleUrls: ['./mur-producteur.component.css']
})
export class MurProducteurComponent implements OnInit {

  producteur: any;
  produit:any;
  constructor(private http: HttpClient, private authService: AuthService, private producteurService : ProducteurService, public affichageProd: AffichageProdService, private access: AccessService) { }

  ngOnInit(): void {
    
    this.getProductFromProducteur();
    this.producteur = this.producteurService.producteur;
  }

  getProductFromProducteur(): void{
    this.http.get(this.access.getBackURL() + 'producteur/produit/' + this.producteurService.producteur.id).subscribe({
      next: (data)=> (this.produit = data),
      error: (err)=> (console.log(err))
    });
  }

  changeFormatMedia(media: any): any {
    return window.atob(media);
  }

  refresh(): void {
    this.ngOnInit();
  }
  contact(): void{
    this.authService.nouveauMessage();
  }

}
