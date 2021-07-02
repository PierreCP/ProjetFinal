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

  panier: any;
  prix: any;
  value='1';
  SelectedValue='1';
  produit: any;
  constructor(public authService : AuthService, private route: Router, private http : HttpClient, private panierService : PanierService, private accessService: AccessService) { }

  ngOnInit(): void {
    this.getProductOfPanier();
    //this.getPrix();
  }

  getProductOfPanier(): void{
    this.http.get('http://localhost:8082/panier/produit/' + this.panierService.getPanierInLocalStorage().id).subscribe({
      next: (data)=> (this.panier = data),
      error: (err)=> (console.log(err))
    });
  }

  changeValue (event: any) { 
    this.value = event.value;
  }

  getPrix(){
    this.prix = this.panier.getprix();
  }

  deleteProduit(): any {
    this.http.delete(this.accessService.getBackURL() + 'panier/produit/' + this.panierService.getPanierInLocalStorage().id + '/' + this.authService.getUserInLocalStorage().id).subscribe({
      next: (data)=>(this.produit = data),
      error: (err)=>(console.log(err))
    })
  }


}
