import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-choux',
  templateUrl: './prod-choux.component.html',
  styleUrls: ['./prod-choux.component.css']
})
export class ProdChouxComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

    retourLegumesMenu(): void {
    this.route.navigateByUrl('prod-legumes');
  }

}
