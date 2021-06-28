import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-etal',
  templateUrl: './etal.component.html',
  styleUrls: ['./etal.component.css']
})
export class EtalComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  redirectionLegumesMenu(): void {
    this.route.navigateByUrl('prod-legumes');
  }
  redirectionFromagesMenu(): void {
    this.route.navigateByUrl('prod-fromages');
  }
  redirectionFruitsMenu(): void {
    this.route.navigateByUrl('prod-fruits');
  }
  redirectionBieresMenu(): void {
    this.route.navigateByUrl('prod-bieres');
  }
  redirectionVinsMenu(): void {
    this.route.navigateByUrl('prod-vins');
  }
  redirectionAutresMenu(): void {
    this.route.navigateByUrl('prod-autres');
  }

  retourEtal(): void {
    this.route.navigateByUrl('etal');
  }

}
