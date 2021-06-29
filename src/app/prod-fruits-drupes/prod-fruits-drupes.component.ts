import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-prod-fruits-drupes',
  templateUrl: './prod-fruits-drupes.component.html',
  styleUrls: ['./prod-fruits-drupes.component.css']
})
export class ProdFruitsDrupesComponent implements OnInit {

  constructor(private http: HttpClient, private authService: AuthService, private route: Router) { }

  drupes: any;
  ngOnInit(): void {
    this.getDrupes();
  }

  retourFruitsMenu(): void {
    this.route.navigateByUrl('prod-fruits');
  }

  getDrupes(): void{
    this.http.get('http://localhost:8082/produit/sous_categorie/Drupes').subscribe({
      next: (data)=> (this.drupes = data),
      error: (err)=> (console.log(err))
    });
  }

}
