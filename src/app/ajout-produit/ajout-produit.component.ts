import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit {

  constructor(private http: HttpClient, public authService: AuthService, private route : Router, public dialogRef: MatDialogRef<AjoutProduitComponent>) { }
  user: any;
  liste: any;
  MsgErr: any

  ngOnInit(): void {
    if (!this.authService.isProd(this.authService.getUserInLocalStorage().id)) {
      this.route.navigateByUrl('accueil');
    }
  }


  ajoutProduit(m: any): void {
    this.user = this.authService.getUserInLocalStorage();
    this.http.get('http://localhost:8082/person/' + this.user.id + '/produit/' + m.name + '/' + m.quantite + '/' + m.prix + '/' + m.description).subscribe({
      next: (data) => { this.liste = data},
      error: (err) => { console.log(err) }
    })
    this.MsgErr = 'Ajout du produit impossible.'
  }


}
