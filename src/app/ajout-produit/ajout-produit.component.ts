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

  constructor(private http: HttpClient, public authService: AuthService, private route : Router, private dialogRef: MatDialogRef<AjoutProduitComponent>) { }

  ngOnInit(): void {
    if (!this.authService.isProd(this.authService.getUserInLocalStorage().id)) {
      this.route.navigateByUrl('accueil');
    }
  }

  ajoutProduit(m: any): void {

    this.http.put('http://localhost:8082/person/', + this.authService.getUserInLocalStorage().id + '/produit/' /*+ produit + '/' + quant*/).subscribe({
      next: (data)=> {
        this.dialogRef.close()
      /*Pour rafraichir DIRECTEMENT
      this.routerouteReuseStrategy.shouldReuseRoute= () => false;
      this.route.onSameUrlNavigation='reload'; 
      this.route.navigateByUrl('menu-prive');*/
      },
        //this.route.navigateByUrl('memo-prive')},
      error: (err) => {
        console.log(err)}
    });
  }


}
