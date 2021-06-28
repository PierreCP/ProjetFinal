import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-rouges',
  templateUrl: './prod-rouges.component.html',
  styleUrls: ['./prod-rouges.component.css']
})
export class ProdRougesComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

    redirectionVinsMenu(): void {
    this.route.navigateByUrl('prod-vins');
  }

}
