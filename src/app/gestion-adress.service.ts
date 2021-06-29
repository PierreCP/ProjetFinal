import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { r3JitTypeSourceSpan } from '@angular/compiler';
import { AccessService } from './access.service';


@Injectable({
  providedIn: 'root'
})
export class GestionAdressService {

  adress: any;
  adressFormatee: string;
  stockAPI: any;

  constructor(private http: HttpClient, private route: Router, private access: AccessService) {
    this.adressFormatee = '';
   }

  getCoordinates(): any{
    this.http.get(this.access.getBackURL() + 'nullAdress').subscribe({
      next: (data) => {
        this.adress = data;
        
        this.adress.numeroRue = 4;
        this.adress.nomRue = "rue du haras";
        this.adress.codePostal = 44119;


        this.adressFormatee = '';
        this.adressFormatee += "https://api-adresse.data.gouv.fr/search/?q=";
        console.log('contenue add a ce niveau ', this.adress )
        this.adressFormatee += this.adress.numeroRue.toString() + "+";
        
        this.adressFormatee += this.adress.nomRue.replace(/ /gi, "+") + "&postcode=";
        this.adressFormatee += this.adress.codePostal.toString();
        
        console.log(this.adressFormatee);

        this.http.get(this.adressFormatee).subscribe({
          next: (data) => {
            console.log(this.stockAPI);
            this.stockAPI = data;
            console.log(data);
            console.log(this.stockAPI.features[0].geometry.coordinates); 
          },
          error: (err) => { console.log("get coordinate error",err) }})

      },
      error: (err) => { console.log(err) }})
      
    
  
  }


}

