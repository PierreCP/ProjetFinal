import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-producteur',
  templateUrl: './menu-producteur.component.html',
  styleUrls: ['./menu-producteur.component.css']
})
export class MenuProducteurComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  doStuff():void{
    this.route.navigateByUrl('menu-prod')
  }
}
