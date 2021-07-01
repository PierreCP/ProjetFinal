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
  Selection: any = "Bienvenu sur Court-Circuit";

  constructor(private route:Router, public authService: AuthService) { }

  ngOnInit(): void {
  }

  doStuff(): void {
    this.route.navigateByUrl('menu-prod')
  }

  lienActivation(): void {
    this.route.navigateByUrl('admin-activation')
  }
  
  Text(Message: any):any{
    this.Selection= Message;
  }

}
