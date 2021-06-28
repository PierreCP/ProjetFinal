import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-mur-producteur',
  templateUrl: './mur-producteur.component.html',
  styleUrls: ['./mur-producteur.component.css']
})
export class MurProducteurComponent implements OnInit {

  person: any;
  producteur: any;
  produit: any;
  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    this.getPerson();
    this.getProduits();
  }

  getPerson(): void{
    //Changer le local Storage pour aller chercher l'id producteur au click
    this.http.get('http://localhost:8082/person/' + this.authService.getUserInLocalStorage().id).subscribe({
      next: (data)=> (this.person = data, this.producteur = data),
      error: (err)=> (console.log(err))
    });
  }

  getProduits(): void{
    //Changer le local Storage pour aller chercher l'id producteur au click
    this.http.get('http://localhost:8082/producteur/produits/' + this.authService.getUserInLocalStorage().id).subscribe({
      next: (data)=> (this.person = data, this.producteur = data),
      error: (err)=> (console.log(err))
    });
  }

}
