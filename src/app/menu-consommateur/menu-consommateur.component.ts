import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-consommateur',
  templateUrl: './menu-consommateur.component.html',
  styleUrls: ['./menu-consommateur.component.css']
})
export class MenuConsommateurComponent implements OnInit {

  hover: boolean = false;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  doStuff():void{
    this.route.navigateByUrl('menu-prod')
  }
}
