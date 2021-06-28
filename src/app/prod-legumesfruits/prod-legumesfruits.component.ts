import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-legumesfruits',
  templateUrl: './prod-legumesfruits.component.html',
  styleUrls: ['./prod-legumesfruits.component.css']
})
export class ProdLegumesfruitsComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

    retourLegumesMenu(): void {
    this.route.navigateByUrl('prod-legumes');
  }

}
