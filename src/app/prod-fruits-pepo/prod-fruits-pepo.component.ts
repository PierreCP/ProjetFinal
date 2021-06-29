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

  constructor(private http: HttpClient, private access: AccessService, private authService: AuthService, private route: Router) { }
  
  user: any;
  liste: any;
  
  ngOnInit(): void {
    this.getSousCategorieByProducteur('Pepos');
  }

  retourFruitsMenu(): void {
    this.route.navigateByUrl('prod-fruits');
  }

  getSousCategorieByProducteur(sousCategorie: String): void{
    this.user=this.authService.getUserInLocalStorage();
    this.http.get('http://localhost:8082/person/produit/' + this.user.id + '/' + sousCategorie).subscribe({
      next: (data)=> (this.liste = data),
      error: (err)=> (console.log(err))
    });
  }

}
