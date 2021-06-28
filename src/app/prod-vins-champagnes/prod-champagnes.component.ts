import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-champagnes',
  templateUrl: './prod-champagnes.component.html',
  styleUrls: ['./prod-champagnes.component.css']
})
export class ProdChampagnesComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

    redirectionVinsMenu(): void {
    this.route.navigateByUrl('prod-vins');
  }

}
