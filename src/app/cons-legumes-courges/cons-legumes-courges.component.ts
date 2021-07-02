import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cons-legumes-courges',
  templateUrl: './cons-legumes-courges.component.html',
  styleUrls: ['./cons-legumes-courges.component.css']
})
export class ConsLegumesCourgesComponent implements OnInit {

  constructor(private route: Router, public authService: AuthService, private http: HttpClient) { }
  user: any;
  liste: any;
  ngOnInit(): void {
    this.getAllProduitBySousCategorie('Courges');
  }

  retourLegumesMenu(): void {
    this.route.navigateByUrl('cons-legumes');
  }

  getAllProduitBySousCategorie(sousCategorie: String): void {
    this.user = this.authService.getUserInLocalStorage();
    this.http.get('http://localhost:8082/produit/sous_categorie/' + sousCategorie).subscribe({
      next: (data) => {
        this.liste = data;
        if (this.liste == "") {
          this.route.navigateByUrl('prod-vins');
        }

      },
      error: (err) => { console.log(err) }

    })
  }

}
