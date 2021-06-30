import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { GestionAdressService } from '../gestion-adress.service';
import { ProducteurService } from '../producteur.service';

@Component({
  selector: 'app-liste-producteur',
  templateUrl: './liste-producteur.component.html',
  styleUrls: ['./liste-producteur.component.css']
})
export class ListeProducteurComponent implements OnInit {
  prdt: any;
  constructor(private http: HttpClient, private authService: AuthService, private route: Router, private producteurService: ProducteurService, private adress: GestionAdressService) { }

  ngOnInit(): void {
    this.getProducteurs();
  }

  getProducteurs(): void{
    this.http.get('http://localhost:8082/producteur').subscribe({
      next: (data)=> (this.prdt = data),
      error: (err)=> (console.log(err))
    });
  }

  redirectionFicheProducteur(prdt: any): any{
    this.producteurService.producteur = prdt;
    this.route.navigateByUrl('mur');
  }

  getDist(idProd: any){
    var u: any = this.authService.getUserInLocalStorage();
    this.adress.getDistance(u.id, idProd)
  }

}
