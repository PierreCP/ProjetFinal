import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { GestionAdressService } from '../gestion-adress.service';
import { HttpClient } from '@angular/common/http';
import { AccessService } from '../access.service';

@Component({
  selector: 'app-menu-consommateur',
  templateUrl: './menu-consommateur.component.html',
  styleUrls: ['./menu-consommateur.component.css']
})
export class MenuConsommateurComponent implements OnInit {

  hover: boolean = false;
  a: any;

  constructor(private route: Router, public adress: GestionAdressService, private http: HttpClient, private access: AccessService, public authService: AuthService) {
    this.http.get(this.access.getBackURL() + 'nullAdress').subscribe({
      next: (data) => {
        this.a=data;
        this.a.numeroRue = 4;
        this.a.nomRue = "rue du haras"
        this.a.codePostal = 44119;
      },
      error: (err) => { console.log("get coordinate error",err) }})
   }

  ngOnInit(): void {
  }

  doStuff():void{
    this.route.navigateByUrl('menu-prod')
  }

  getAdress():void{
    this.adress.getDistance(22, 25);
  }

   
}
