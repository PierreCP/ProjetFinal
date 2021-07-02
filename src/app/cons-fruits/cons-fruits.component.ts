import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cons-fruits',
  templateUrl: './cons-fruits.component.html',
  styleUrls: ['./cons-fruits.component.css']
})
export class ConsFruitsComponent implements OnInit {

  constructor(private route: Router) { }
  user: any;
  liste: any;
  ngOnInit(): void {
  }
  retourEtal(): void {
    this.route.navigateByUrl('etal-cons');

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
