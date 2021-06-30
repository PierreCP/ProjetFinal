import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {

  hover: boolean = false;

  constructor(private route:Router, public authService: AuthService) { }

  ngOnInit(): void {
  }

  doStuff(): void {
    this.route.navigateByUrl('menu-prod')
  }

}
