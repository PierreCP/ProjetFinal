import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessService } from '../access.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-prod-fromages',
  templateUrl: './prod-fromages.component.html',
  styleUrls: ['./prod-fromages.component.css']
})
export class ProdFromagesComponent implements OnInit {

  constructor(public http: HttpClient, private access: AccessService, public authService: AuthService, private route: Router) { }
  opened: boolean = false;
  user: any;
  liste: any;
  ngOnInit(): void {
    this.getSousCategorieByProducteur('Fromages');
  }

  toggleSidenav(): boolean {
    return this.opened = !this.opened
  }
  getSousCategorieByProducteur(sousCategorie: String): void {
    this.user = this.authService.getUserInLocalStorage();
    this.http.get(this.access.getBackURL() + 'person/produit/' + this.user.id + '/' + sousCategorie).subscribe({
      next: (data) => {
        this.liste = data;
        if (this.liste == "") {
          this.route.navigateByUrl('etal');
        }

      },
      error: (err) => { console.log(err) }

    })
  }

  retourEtal(): void {
    this.route.navigateByUrl('etal');
  }
}
