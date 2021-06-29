import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionAdressService } from '../gestion-adress.service';

@Component({
  selector: 'app-menu-consommateur',
  templateUrl: './menu-consommateur.component.html',
  styleUrls: ['./menu-consommateur.component.css']
})
export class MenuConsommateurComponent implements OnInit {

  hover: boolean = false;

  constructor(private route: Router, public adress: GestionAdressService) { }

  ngOnInit(): void {
  }

  doStuff():void{
    this.route.navigateByUrl('menu-prod')
  }

  getAdress():void{
    this.adress.getCoordinates();
  }
}
