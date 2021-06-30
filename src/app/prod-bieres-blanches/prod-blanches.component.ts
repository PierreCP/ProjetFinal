import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessService } from '../access.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-prod-blanches',
  templateUrl: './prod-blanches.component.html',
  styleUrls: ['./prod-blanches.component.css']
})
export class ProdBlanchesComponent implements OnInit {

  constructor(private http: HttpClient, private access: AccessService, private authService: AuthService, private route: Router) { }
  
  user: any;
  liste: any;
  ngOnInit(): void {
    this.getSousCategorieByProducteur('Bières blanches');
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
