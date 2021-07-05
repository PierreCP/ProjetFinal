import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-prod-vins',
  templateUrl: './prod-vins.component.html',
  styleUrls: ['./prod-vins.component.css']
})
export class ProdVinsComponent implements OnInit {

  constructor(private route: Router, public authService: AuthService) { }
  opened: boolean = false;
  ngOnInit(): void {
    if (!this.authService.isProd(this.authService.getUserInLocalStorage().id)) {
      this.route.navigateByUrl('accueil');
    }
  }

  
  toggleSidenav(): boolean {
    return this.opened = !this.opened
  }

  retourEtal(): void {
    this.route.navigateByUrl('etal');
  }
  redirectionRougesMenu(): void {
    this.route.navigateByUrl('prod-rouges');
  }
  redirectionBlancsMenu(): void {
    this.route.navigateByUrl('prod-blancs');
  }
  redirectionRosesMenu(): void {
    this.route.navigateByUrl('prod-roses');
  }
  redirectionChampagnesMenu(): void {
    this.route.navigateByUrl('prod-champagnes');
  }
}
