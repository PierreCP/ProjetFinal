import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { analyzeAndValidateNgModules, r3JitTypeSourceSpan } from '@angular/compiler';
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

  getCoordinates(a: any): void {
    this.http.get(this.access.getBackURL() + 'nullAdress').subscribe({
      next: (data) => {
        this.adress = data;

        this.adress.numeroRue = a.numeroRue;
        this.adress.nomRue = a.nomRue;
        this.adress.codePostal = a.codePostal;


        this.adressFormatee = '';
        this.adressFormatee += "https://api-adresse.data.gouv.fr/search/?q=";
        console.log('contenue add a ce niveau ', this.adress)
        this.adressFormatee += this.adress.numeroRue.toString() + "+";

        this.adressFormatee += this.adress.nomRue.replace(/ /gi, "+") + "&postcode=";
        this.adressFormatee += this.adress.codePostal.toString();

        console.log(this.adressFormatee);

        this.http.get(this.adressFormatee).subscribe({
          next: (data) => {
            console.log(this.stockAPI);
            this.stockAPI = data;


            this.adress.x = this.stockAPI.features[0].properties.x;
            this.adress.y = this.stockAPI.features[0].properties.y;
            this.adress.nomCommune = this.stockAPI.features[0].properties.city;

            console.log(this.adress);

            this.newAdress(this.adress);

          },
          error: (err) => { console.log("get coordinate error", err) }
        })

      },
      error: (err) => { console.log(err) }
    })
  }


  newAdress(a: any): void {
    this.http.post(this.access.getBackURL() + 'newAdress', a).subscribe({
      next: (data) => { },
      error: (err) => { console.log("get coordinate error", err) }
    })
  }

  getAdressById(id: any): any {
    this.http.get(this.access.getBackURL() + 'adress/' + id).subscribe({
      next: (data) => { return data },
      error: (err) => { console.log("get coordinate error", err) }
    })
    console.log()
  }


  getDistance(id1: any, id2: any): any {
    var p1: any;
    var p2: any;

    this.http.get(this.access.getBackURL() + 'person/' + id1).subscribe({
      next: (data) => { 
        p1 = data
        this.http.get(this.access.getBackURL() + 'person/' + id2).subscribe({
          next: (data) => { 
            p2 = data 
            console.log("Distance : " + Math.sqrt( Math.pow(p1.adresse.x - p2.adresse.x, 2) + Math.pow(p1.adresse.y - p2.adresse.y, 2)))
            return Math.sqrt( Math.pow(p1.adresse.x - p2.adresse.x, 2) + Math.pow(p1.adresse.y - p2.adresse.y, 2)) 
          },
          error: (err) => { console.log("get coordinate error", err) }
        }) 
      },
      error: (err) => { console.log("get coordinate error", err) }
    })
     

  }

  updateCoordinates(idPerson: any): void{
    var p: any;
    this.http.get(this.access.getBackURL() + 'person/' + idPerson).subscribe({
      next: (data) => { 
        p = data
        console.log(p);
        this.adressFormatee = '';
        this.adressFormatee += "https://api-adresse.data.gouv.fr/search/?q=";
        this.adressFormatee += p.adresse.numeroRue.toString() + "+";
        this.adressFormatee += p.adresse.nomRue.replace(/ /gi, "+") + "&postcode=";
        this.adressFormatee += p.adresse.codePostal.toString();

        this.http.get(this.adressFormatee).subscribe({
          next: (data) => {
            console.log(this.stockAPI);
            this.stockAPI = data;


            p.adresse.x = this.stockAPI.features[0].properties.x;
            p.adresse.y = this.stockAPI.features[0].properties.y;
            p.adresse.nomCommune = this.stockAPI.features[0].properties.city;

            this.http.put(this.access.getBackURL() + "person/" + idPerson, p).subscribe({
              next: (data) => {},
              error: (err) => { console.log("put error", err) }
            })

          },
          error: (err) => { console.log("get coordinate error", err) }
        })
      },
        error: (err) => { console.log("no person found : ", err) }})
  }


}

