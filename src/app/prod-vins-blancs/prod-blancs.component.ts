import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-blancs',
  templateUrl: './prod-blancs.component.html',
  styleUrls: ['./prod-blancs.component.css']
})
export class ProdBlancsComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

    redirectionVinsMenu(): void {
    this.route.navigateByUrl('prod-vins');
  }

}
