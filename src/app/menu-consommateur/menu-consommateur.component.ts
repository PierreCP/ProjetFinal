import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { GestionAdressService } from '../gestion-adress.service';

@Component({
  selector: 'app-menu-consommateur',
  templateUrl: './menu-consommateur.component.html',
  styleUrls: ['./menu-consommateur.component.css']
})
export class MenuConsommateurComponent implements OnInit {

  constructor(private route: Router, public authService: AuthService, public adress: GestionAdressService) { }
  hover: boolean = false;

  ngOnInit(): void {
  }

  doStuff():void{
    this.route.navigateByUrl('menu-prod')
  }

  getAdress():void{
    this.adress.getCoordinates();
  }
}
