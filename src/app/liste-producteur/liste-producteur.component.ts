import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessService } from '../access.service';
import { AuthService } from '../auth.service';
import { ProducteurService } from '../producteur.service';

@Component({
  selector: 'app-liste-producteur',
  templateUrl: './liste-producteur.component.html',
  styleUrls: ['./liste-producteur.component.css']
})
export class ListeProducteurComponent implements OnInit {
  prdt: any;
  user: any;


  constructor(private http: HttpClient, public authService: AuthService, private route: Router, private producteurService: ProducteurService, private access: AccessService) { }

  ngOnInit(): void {
    if (!this.authService.isCons(this.authService.getUserInLocalStorage().id)) {
      this.route.navigateByUrl('accueil');
    }
    this.user = this.authService.getUserInLocalStorage();
    this.getProducteurs();
    
    
  }

  getProducteurs(): void{
    var p: any
    this.http.get(this.access.getBackURL() + 'producteurWithDist/' + this.user.id).subscribe({
      next: (data)=> {
        this.prdt = data;
        console.log(this.prdt)},
      error: (err)=> (console.log(err))
    });
  }

  redirectionFicheProducteur(prdt: any): any{
    this.producteurService.producteur = prdt;
    this.route.navigateByUrl('mur');
    this.authService.setRecInLocalStorage(prdt.person);
    this.authService.setProdInLocalStorage(prdt);
  }

  getDist(idProd: any): any{
    return "test";
  //return this.adress.getDistance(this.user.id, idProd);
  }

  goHome(): void{
    this.route.navigateByUrl('menu-cons');
  }


}
