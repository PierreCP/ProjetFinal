import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AccessService } from '../access.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-menu-producteur',
  templateUrl: './menu-producteur.component.html',
  styleUrls: ['./menu-producteur.component.css']
})
export class MenuProducteurComponent implements OnInit {

  constructor(private http: HttpClient, private route: Router, public authService: AuthService, private access: AccessService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  doStuff():void{
    this.route.navigateByUrl('menu-prod')
  }
  
  redirectionEtal(): void {
    this.route.navigateByUrl('etal')
  }
}
