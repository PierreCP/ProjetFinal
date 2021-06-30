import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {

  hover: boolean = false;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  doStuff(): void {
    this.route.navigateByUrl('menu-prod')
  }

  lienActivation(): void {
    this.route.navigateByUrl('admin-activation')
  }

}
