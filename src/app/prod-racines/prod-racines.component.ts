import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-racines',
  templateUrl: './prod-racines.component.html',
  styleUrls: ['./prod-racines.component.css']
})
export class ProdRacinesComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

    retourLegumesMenu(): void {
    this.route.navigateByUrl('prod-legumes');
  }

}
