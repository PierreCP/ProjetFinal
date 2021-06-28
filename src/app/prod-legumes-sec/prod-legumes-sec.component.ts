import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-legumes-sec',
  templateUrl: './prod-legumes-sec.component.html',
  styleUrls: ['./prod-legumes-sec.component.css']
})
export class ProdLegumesSecComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

    retourLegumesMenu(): void {
    this.route.navigateByUrl('prod-legumes');
  }

}
