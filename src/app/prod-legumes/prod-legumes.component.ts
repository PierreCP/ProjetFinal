import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-legumes',
  templateUrl: './prod-legumes.component.html',
  styleUrls: ['./prod-legumes.component.css']
})
export class ProdLegumesComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  retourEtal(): void {
    this.route.navigateByUrl('etal');
  }

}
