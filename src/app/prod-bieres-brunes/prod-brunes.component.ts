import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessService } from '../access.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-prod-brunes',
  templateUrl: './prod-brunes.component.html',
  styleUrls: ['./prod-brunes.component.css']
})
export class ProdBrunesComponent implements OnInit {

  constructor(private http: HttpClient, private access: AccessService, public authService: AuthService, private route: Router) { }
  
  user: any;
  liste: any;
  ngOnInit(): void {
    this.getSousCategorieByProducteur('Bières brunes');
  }

  retourBieresMenu(): void {
    this.route.navigateByUrl('prod-bieres');}

  getSousCategorieByProducteur(sousCategorie: String): void {
    this.user = this.authService.getUserInLocalStorage();
    this.http.get('http://localhost:8082/person/produit/' + this.user.id + '/' + sousCategorie).subscribe({
      next: (data) => {
        this.liste = data;
        if (this.liste == "") {
          this.route.navigateByUrl('prod-bieres');
        }

      },
      error: (err) => { console.log(err) }

    })
  }
}
