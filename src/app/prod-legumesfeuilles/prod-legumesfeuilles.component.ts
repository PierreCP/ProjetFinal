import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-legumesfeuilles',
  templateUrl: './prod-legumesfeuilles.component.html',
  styleUrls: ['./prod-legumesfeuilles.component.css']
})
export class ProdLegumesfeuillesComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

    retourLegumesMenu(): void {
    this.route.navigateByUrl('prod-legumes');
  }

}
