import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-legumes',
  templateUrl: './prod-legumes.component.html',
  styleUrls: ['./prod-legumes.component.css']
})
export class ProdLegumesComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  retourEtal(): void {
    this.route.navigateByUrl('etal');
  }

  redirectionRacinesMenu(): void {
    this.route.navigateByUrl('prod-autres');
  }
  redirectionChouxMenu(): void {
    this.route.navigateByUrl('prod-autres');
  }
  redirectionCourgesMenu(): void {
    this.route.navigateByUrl('prod-autres');
  }
  redirectionChampignonsMenu(): void {
    this.route.navigateByUrl('prod-autres');
  }
  redirectionAromatiquesMenu(): void {
    this.route.navigateByUrl('prod-autres');
  }
  redirectionLegumesFruitsMenu(): void {
    this.route.navigateByUrl('prod-autres');
  }
  redirectionSaladesMenu(): void {
    this.route.navigateByUrl('prod-autres');
  }
  redirectionLegumesFeuillesMenu(): void {
    this.route.navigateByUrl('prod-autres');
  }
  redirectionLegumesSecsMenu(): void {
    this.route.navigateByUrl('prod-autres');
  }

}
