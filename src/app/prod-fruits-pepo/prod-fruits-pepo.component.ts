import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessService } from '../access.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-prod-fruits-pepo',
  templateUrl: './prod-fruits-pepo.component.html',
  styleUrls: ['./prod-fruits-pepo.component.css']
})
export class ProdFruitsPepoComponent implements OnInit {

  constructor(private http: HttpClient, private access: AccessService, public authService: AuthService, private route: Router) { }
  opened: boolean = false;
  user: any;
  liste: any;
  
  ngOnInit(): void {
    if (!this.authService.isProd(this.authService.getUserInLocalStorage().id)) {
      this.route.navigateByUrl('accueil');
    }
    this.getSousCategorieByProducteur('Pepos');
  }


  
  toggleSidenav(): boolean {
    return this.opened = !this.opened
  }
  retourFruitsMenu(): void {
    this.route.navigateByUrl('prod-fruits');
  }

  getSousCategorieByProducteur(sousCategorie: String): void {
    this.user = this.authService.getUserInLocalStorage();
    this.http.get(this.access.getBackURL() + 'person/produit/' + this.user.id + '/' + sousCategorie).subscribe({
      next: (data) => {
        this.liste = data;
        if (this.liste == "") {
          this.route.navigateByUrl('prod-fruits');
        }

      },
      error: (err) => { console.log(err) }

    })
  }

}
