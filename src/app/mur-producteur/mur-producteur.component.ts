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
    this.producteur = this.authService.getProdInLocalStorage();
    this.getProductFromProducteur();    
    console.log(this.producteur);
  }

  getProductFromProducteur(): void{
    this.http.get('http://localhost:8082/producteur/produit/' + this.producteur.id).subscribe({
      next: (data)=> (this.produit = data),
      error: (err)=> (console.log(err))
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
  contact(): void{
    this.authService.nouveauMessage();
  }

}
