import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AccessService } from '../access.service';
import { AjoutProduitComponent } from '../ajout-produit/ajout-produit.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-etal',
  templateUrl: './etal.component.html',
  styleUrls: ['./etal.component.css']
})
export class EtalComponent implements OnInit {

  constructor(private http: HttpClient, private authService: AuthService, private route: Router, private access: AccessService) { }

  liste: any;
  liste2: any;
  user: any;
  MsgErr: any;
  ngOnInit(): void {
  }

  redirectionLegumesMenu(): void {
    this.route.navigateByUrl('prod-legumes');
  }
  redirectionFromagesMenu(): void {
    this.route.navigateByUrl('prod-fromages');
  }
  redirectionFruitsMenu(): void {
    this.route.navigateByUrl('prod-fruits');
  }
  redirectionBieresMenu(): void {
    this.route.navigateByUrl('prod-bieres');
  }
  redirectionVinsMenu(): void {
    this.route.navigateByUrl('prod-vins');
  }
  redirectionAutresMenu(): void {
    this.route.navigateByUrl('prod-autres');
  }

  retourEtal(): void {
    this.route.navigateByUrl('etal');
  }

  retourMenuProd(): void {
    this.route.navigateByUrl('menu-prod');
  }

  ajoutProduit(m: any): void {
    this.user = this.authService.getUserInLocalStorage();
    this.http.get('http://localhost:8082/person/' + this.user.id + '/produit/' + m.name + '/' + m.quantite + '/' + m.prix + '/' + m.description).subscribe({
      next: (data) => { this.liste2 = data },
      error: (err) => { console.log(err) }
    })
    this.MsgErr = 'Ajout du produit impossible.'
  }

  modifierProduit(m: any): void {
    console.log('Ici on débute');
    this.user=this.authService.getUserInLocalStorage();
    this.http.get('http://localhost:8082/person/' + '/produit/' + this.user.id + '/' + m.name + '/' + m.quantite + '/' + m.prix + '/' + m.description).subscribe({
      next: (data) => { this.liste2 = data},
      error: (err) => { console.log(err) }
    })
          this.MsgErr = 'Ajout du produit impossible.'
        }


}




