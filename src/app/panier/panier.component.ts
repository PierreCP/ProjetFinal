import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  panier: any;
  consommateur: any;
  constructor(public authService : AuthService, private route: Router, private http : HttpClient, private panierService : PanierService) { }

  ngOnInit(): void {
    this.consommateur = this.authService.getUserInLocalStorage();
   // this.getProductOfPanier();
  }

  getProductOfPanier(): void{
    this.http.get('http://localhost:8082/panier/' + this.panierService.panier.id).subscribe({
      next: (data)=> (this.panier = data),
      error: (err)=> (console.log(err))
    });
  }


}