import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessService } from '../access.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-etal-cons',
  templateUrl: './etal-cons.component.html',
  styleUrls: ['./etal-cons.component.css']
})
export class EtalConsComponent implements OnInit {

  constructor(private http: HttpClient, public authService: AuthService, private route: Router, private access: AccessService) { }

  liste: any;
  liste2: any;
  user: any;
  MsgErr: any;
  ngOnInit(): void {
  }

  redirectionLegumesMenu(): void {
    this.route.navigateByUrl('cons-legumes');
  }
  redirectionFromagesMenu(): void {
    this.route.navigateByUrl('cons-fromages');
  }
  redirectionFruitsMenu(): void {
    this.route.navigateByUrl('cons-fruits');
  }
  redirectionBieresMenu(): void {
    this.route.navigateByUrl('cons-bieres');
  }
  redirectionVinsMenu(): void {
    this.route.navigateByUrl('cons-vins');
  }
  redirectionAutresMenu(): void {
    this.route.navigateByUrl('cons-autres');
  }


  retourMenuCons(): void {
    this.route.navigateByUrl('nav-cons');
  }
}