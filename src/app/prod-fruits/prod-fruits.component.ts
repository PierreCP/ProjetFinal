import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-prod-fruits',
  templateUrl: './prod-fruits.component.html',
  styleUrls: ['./prod-fruits.component.css']
})
export class ProdFruitsComponent implements OnInit {

  constructor(private route: Router, public authService: AuthService) { }

  ngOnInit(): void {
  }

  retourEtal(): void {
    this.route.navigateByUrl('etal');
  }


  redirectionDrupesMenu(): void {
    this.route.navigateByUrl('prod-drupes');
  }
  redirectionBaiesMenu(): void {
    this.route.navigateByUrl('prod-baies');
  }
  redirectionPomesMenu(): void {
    this.route.navigateByUrl('prod-pomes');
  }
  redirectionAgrumesMenu(): void {
    this.route.navigateByUrl('prod-agrumes');
  }
  redirectionPeposMenu(): void {
    this.route.navigateByUrl('prod-pepos');
  }
  redirectionTropicauxMenu(): void {
    this.route.navigateByUrl('prod-tropicaux');
  }
}
