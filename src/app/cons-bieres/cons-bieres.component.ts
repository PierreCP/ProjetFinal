import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cons-bieres',
  templateUrl: './cons-bieres.component.html',
  styleUrls: ['./cons-bieres.component.css']
})
export class ConsBieresComponent implements OnInit {

  constructor(private route: Router) { }
  user: any;
  liste: any;

  ngOnInit(): void {
  }
  retourEtal(): void {
    this.route.navigateByUrl('etal-cons');

  }
  redirectionBlondesMenu(): void {
    this.route.navigateByUrl('cons-blondes');
  }
  redirectionBrunesMenu(): void {
    this.route.navigateByUrl('cons-brunes');
  }
  redirectionRoussesMenu(): void {
    this.route.navigateByUrl('cons-rousses');
  }
  redirectionBlanchesMenu(): void {
    this.route.navigateByUrl('cons-blanches');
  }
}
