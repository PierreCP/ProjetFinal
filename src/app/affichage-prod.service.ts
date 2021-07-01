import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AffichageProdService {

  menuVisible: boolean = true;
  etalVisible: boolean = false;
  murVisible: boolean = false;
  commandesVisible: boolean = false;

  constructor(private route: Router, private http: HttpClient) {}

  toggleMenu(): void{
    this.menuVisible = !this.menuVisible;
    this.murVisible = !this.murVisible;
    console.log(this.menuVisible);
    console.log(this.murVisible);
  }

  toggleEtal(): void{
    this.etalVisible = !this.etalVisible;
  }

  toggleMur(): void{
    this.murVisible = !this.murVisible;
  }

  toggleCommandes(): void{
    this.commandesVisible = !this.commandesVisible;
  }

}
