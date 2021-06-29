import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class GestionAdressService {

  adress: any;

  constructor(private http: HttpClient, private route: Router) { }

  getCoordinates(): any{
    this.http.get("https://api-adresse.data.gouv.fr/search/?q=4+rue+du+haras&postcode=44119").subscribe({
      next: (data) => {
        this.adress=data;
        console.log(data);
        console.log(this.adress.features[0].geometry.coordinates); 
      },
      error: (err) => { console.log(err) }
  })
  }
}
