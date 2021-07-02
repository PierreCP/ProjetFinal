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
  quantite= '1';
  value='1';
  SelectedValue='1';
  produit: any;
  constructor(public authService : AuthService, private route: Router, private http : HttpClient, private panierService : PanierService, private accessService: AccessService) { }

  ngOnInit(): void {
    this.getProductOfPanier();
  }

  getProductOfPanier(): void{
    this.http.get('http://localhost:8082/panier/produit/' + this.panierService.getPanierInLocalStorage().id).subscribe({
      next: (data)=> (this.produit = data),
      error: (err)=> (console.log(err))
    });
  }

  changeValue (event: any) {
    this.value = event.value;
    //this.prix = this.value*this.produit.prix;
  }

  getPrix(prt: any): any{
    this.prix = prt.prix
    console.log(prt);
   //this.prix = this.produit.prix;
  }

  

  deleteProduit(prdt :any): any {
    console.log(prdt);
    this.http.delete('http://localhost:8082/panier/produit/' + prdt.id + '/' + this.panierService.getPanierInLocalStorage().id).subscribe({
      next: (data)=>(
        prdt = data,
        this.getProductOfPanier()
        ),
      
      error: (err)=>(console.log(err))
    })
  }


}
