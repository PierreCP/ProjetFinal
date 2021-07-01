import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AccessService } from '../access.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-test123',
  templateUrl: './test123.component.html',
  styleUrls: ['./test123.component.css']
})
export class Test123Component implements OnInit {

  events: string[] = [];
  opened: boolean = true;
  msgErr = '';
  

  // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));


  constructor(private http: HttpClient, private route: Router, public authService: AuthService, private access: AccessService) { }

  ngOnInit(): void {
  }

  toggleSidenav(): void {
    this.opened = !this.opened
  }

  uploader(): void {
    this.route.navigateByUrl('uploader');
  }
}
