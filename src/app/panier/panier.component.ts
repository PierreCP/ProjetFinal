import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessService } from '../access.service';
import { AuthService } from '../auth.service';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  prix: any;
  visible: any;
  prixTot= 0;
  produit: any;
  quantiteTot= 0;
  constructor(public authService : AuthService, private route: Router, private http : HttpClient, private panierService : PanierService, private accessService: AccessService) { }

  ngOnInit(): void {
    this.prixTot = 0;
    this.quantiteTot = 0;
    this.getProductOfPanier();
    console.log(this.produit);
  }

  getProductOfPanier(): void{
    var p:any;
    this.http.get(this.accessService.getBackURL() + '/panier/produit/' + this.panierService.getPanierInLocalStorage().id).subscribe({
      next: (data)=> {
        this.produit = data;
        console.log(this.produit)
        for (p in this.produit) {
          this.prixTot+= this.produit[p].prix*this.produit[p].quantiteCons;
          this.quantiteTot += this.produit[p].quantiteCons;
        }
        this.prixTot = Math.round(this.prixTot*100)/100
        if (this.produit[p] == null) {
          this.visible = true;
        }
        else{
          this.visible = false;
        }
      },
      error: (err)=> (console.log(err))
    });
  }

  deleteProduit(prdt :any): any {
    this.http.delete(this.accessService.getBackURL() + 'panier/produit/' + prdt.id + '/' + this.panierService.getPanierInLocalStorage().id).subscribe({
      next: (data)=>(
        prdt = data,
        this.ngOnInit()
        ),
      
      error: (err)=>(console.log(err))
    })
  }

  Valider(){
    this.http.delete(this.accessService.getBackURL() + 'validation-panier/' + this.panierService.getPanierInLocalStorage().id).subscribe({
      next: (data)=>(
        this.ngOnInit()
        ),
      
      error: (err)=>(console.log(err))
    })
  }


}
