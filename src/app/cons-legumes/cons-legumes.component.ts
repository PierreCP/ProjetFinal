import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cons-legumes',
  templateUrl: './cons-legumes.component.html',
  styleUrls: ['./cons-legumes.component.css']
})
export class ConsLegumesComponent implements OnInit {

  constructor(private route: Router) { }
  user: any;
  liste: any;
  opened: boolean = false;
  ngOnInit(): void {
  }
  retourEtal(): void {
    this.route.navigateByUrl('etal-cons');

  }
  redirectionRacinesMenu(): void {
    this.route.navigateByUrl('cons-racines');
  }
  redirectionChouxMenu(): void {
    this.route.navigateByUrl('cons-choux');
  }
  redirectionCourgesMenu(): void {
    this.route.navigateByUrl('cons-courges');
  }
  redirectionChampignonsMenu(): void {
    this.route.navigateByUrl('cons-champignons');
  }
  redirectionAromatiquesMenu(): void {
    this.route.navigateByUrl('cons-aromatiques');
  }
  redirectionLegumesFruitsMenu(): void {
    this.route.navigateByUrl('cons-legumesFruits');
  }
  redirectionSaladesMenu(): void {
    this.route.navigateByUrl('cons-salades');
  }
  redirectionLegumesFeuillesMenu(): void {
    this.route.navigateByUrl('cons-legumesFeuilles');
  }
  redirectionLegumesSecsMenu(): void {
    this.route.navigateByUrl('cons-legumesSecs');
  }
}
