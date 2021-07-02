import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  constructor(private http: HttpClient, private authService: AuthService, private producteurService : ProducteurService) { }

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

  contact(): void{
    this.authService.nouveauMessage();
  }

}
