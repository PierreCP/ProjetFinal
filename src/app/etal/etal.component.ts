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

  constructor(private http: HttpClient, public authService: AuthService, private route: Router, private access: AccessService) { }

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



}




