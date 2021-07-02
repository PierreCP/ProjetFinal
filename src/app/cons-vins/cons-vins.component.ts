import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cons-vins',
  templateUrl: './cons-vins.component.html',
  styleUrls: ['./cons-vins.component.css']
})
export class ConsVinsComponent implements OnInit {
 
  constructor(private route: Router, public authService: AuthService) { }
  user: any;
  liste: any;
  opened: boolean = false;
  ngOnInit(): void {
  }
  retourEtal(): void {
    this.route.navigateByUrl('etal-cons');

  }

  
  toggleSidenav(): boolean {
    return this.opened = !this.opened
  }
  redirectionRougesMenu(): void {
    this.route.navigateByUrl('cons-rouges');
  }
  redirectionBlancsMenu(): void {
    this.route.navigateByUrl('cons-blancs');
  }
  redirectionRosesMenu(): void {
    this.route.navigateByUrl('cons-roses');
  }
  redirectionChampagnesMenu(): void {
    this.route.navigateByUrl('cons-champagnes');
  }

}
