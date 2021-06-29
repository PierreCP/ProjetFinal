import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-menu-producteur',
  templateUrl: './menu-producteur.component.html',
  styleUrls: ['./menu-producteur.component.css']
})
export class MenuProducteurComponent implements OnInit {

  constructor(private route: Router, public authService: AuthService) { }

  ngOnInit(): void {
  }

  doStuff():void{
    this.route.navigateByUrl('menu-prod')
  }
}
