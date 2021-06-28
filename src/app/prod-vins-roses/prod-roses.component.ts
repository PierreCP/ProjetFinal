import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-roses',
  templateUrl: './prod-roses.component.html',
  styleUrls: ['./prod-roses.component.css']
})
export class ProdRosesComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

    redirectionVinsMenu(): void {
    this.route.navigateByUrl('prod-vins');
  }

}
