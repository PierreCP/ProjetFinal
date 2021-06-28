import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-vins',
  templateUrl: './prod-vins.component.html',
  styleUrls: ['./prod-vins.component.css']
})
export class ProdVinsComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  retourEtal(): void {
    this.route.navigateByUrl('etal');
  }

}
