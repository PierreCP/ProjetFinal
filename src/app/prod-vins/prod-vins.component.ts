import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-vins',
  templateUrl: './prod-vins.component.html',
  styleUrls: ['./prod-vins.component.css']
})
export class ProdVinsComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
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
