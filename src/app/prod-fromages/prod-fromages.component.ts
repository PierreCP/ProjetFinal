import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-fromages',
  templateUrl: './prod-fromages.component.html',
  styleUrls: ['./prod-fromages.component.css']
})
export class ProdFromagesComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  retourEtal(): void {
    this.route.navigateByUrl('etal');
  }
}
