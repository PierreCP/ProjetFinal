import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-champignons',
  templateUrl: './prod-champignons.component.html',
  styleUrls: ['./prod-champignons.component.css']
})
export class ProdChampignonsComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

    retourLegumesMenu(): void {
    this.route.navigateByUrl('prod-legumes');
  }

}
