import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AccessService } from '../access.service';

@Component({
  selector: 'app-navbar-prod',
  templateUrl: './navbar-prod.component.html',
  styleUrls: ['./navbar-prod.component.css']
})
export class NavbarProdComponent implements OnInit {

  events: string[] = [];
  opened: boolean = false;
  msgErr = '';
  

  // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));


  constructor(private http: HttpClient, private route: Router, public authService: AuthService, private access: AccessService) { }

  ngOnInit(): void {
  }

  toggleSidenav(): boolean {
    return this.opened = !this.opened
  }

  uploader(): void {
    this.route.navigateByUrl('uploader');
  }
}
