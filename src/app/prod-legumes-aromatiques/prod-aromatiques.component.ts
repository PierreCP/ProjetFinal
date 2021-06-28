import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-aromatiques',
  templateUrl: './prod-aromatiques.component.html',
  styleUrls: ['./prod-aromatiques.component.css']
})
export class ProdAromatiquesComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

    retourLegumesMenu(): void {
    this.route.navigateByUrl('prod-legumes');
  }
}
