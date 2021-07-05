import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cons-fruits',
  templateUrl: './cons-fruits.component.html',
  styleUrls: ['./cons-fruits.component.css']
})
export class ConsFruitsComponent implements OnInit {

  constructor(private route: Router, public authService: AuthService) { }
  user: any;
  liste: any;
  opened: boolean = false;
  ngOnInit(): void {
    if (!this.authService.isCons(this.authService.getUserInLocalStorage().id)) {
      this.route.navigateByUrl('accueil');
    }
  }
  retourEtal(): void {
    this.route.navigateByUrl('etal-cons');

  }
  
  toggleSidenav(): boolean {
    return this.opened = !this.opened
  }

  redirectionDrupesMenu(): void {
    this.route.navigateByUrl('cons-drupes');
  }
  redirectionBaiesMenu(): void {
    this.route.navigateByUrl('cons-baies');
  }
  redirectionPomesMenu(): void {
    this.route.navigateByUrl('cons-pomes');
  }
  redirectionAgrumesMenu(): void {
    this.route.navigateByUrl('cons-agrumes');
  }
  redirectionPeposMenu(): void {
    this.route.navigateByUrl('cons-pepos');
  }
  redirectionTropicauxMenu(): void {
    this.route.navigateByUrl('cons-tropicaux');
  }

}
