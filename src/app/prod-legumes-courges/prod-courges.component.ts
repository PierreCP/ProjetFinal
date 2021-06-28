import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-courges',
  templateUrl: './prod-courges.component.html',
  styleUrls: ['./prod-courges.component.css']
})
export class ProdCourgesComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

    retourLegumesMenu(): void {
    this.route.navigateByUrl('prod-legumes');
  }
}
