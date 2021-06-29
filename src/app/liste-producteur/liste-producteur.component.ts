import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-liste-producteur',
  templateUrl: './liste-producteur.component.html',
  styleUrls: ['./liste-producteur.component.css']
})
export class ListeProducteurComponent implements OnInit {

  producteur: any;
  constructor(private http: HttpClient, private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
    this.getProducteurs();
  }

  getProducteurs(): void{
    this.http.get('http://localhost:8082/producteur').subscribe({
      next: (data)=> (this.producteur = data),
      error: (err)=> (console.log(err))
    });
  }

  redirectionFicheProducteur(): void{
    this.route.navigateByUrl('mur');
  }

}
