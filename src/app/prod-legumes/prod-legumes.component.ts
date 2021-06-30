import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-prod-legumes',
  templateUrl: './prod-legumes.component.html',
  styleUrls: ['./prod-legumes.component.css']
})
export class ProdLegumesComponent implements OnInit {

  constructor(private route: Router, public authService: AuthService) { }

  ngOnInit(): void {
  }

  retourEtal(): void {
    this.route.navigateByUrl('etal');
  }

  redirectionRacinesMenu(): void {
    this.route.navigateByUrl('prod-racines');
  }
  redirectionChouxMenu(): void {
    this.route.navigateByUrl('prod-choux');
  }
  redirectionCourgesMenu(): void {
    this.route.navigateByUrl('prod-courges');
  }
  redirectionChampignonsMenu(): void {
    this.route.navigateByUrl('prod-champignons');
  }
  redirectionAromatiquesMenu(): void {
    this.route.navigateByUrl('prod-aromatiques');
  }
  redirectionLegumesFruitsMenu(): void {
    this.route.navigateByUrl('prod-legumesFruits');
  }
  redirectionSaladesMenu(): void {
    this.route.navigateByUrl('prod-salades');
  }
  redirectionLegumesFeuillesMenu(): void {
    this.route.navigateByUrl('prod-legumesFeuilles');
  }
  redirectionLegumesSecsMenu(): void {
    this.route.navigateByUrl('prod-legumesSecs');
  }

}
