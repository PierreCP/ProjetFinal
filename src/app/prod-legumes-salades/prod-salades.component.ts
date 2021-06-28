import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-salades',
  templateUrl: './prod-salades.component.html',
  styleUrls: ['./prod-salades.component.css']
})
export class ProdSaladesComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

    retourLegumesMenu(): void {
    this.route.navigateByUrl('prod-legumes');
  }

}
