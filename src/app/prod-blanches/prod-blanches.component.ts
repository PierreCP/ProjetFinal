import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-blanches',
  templateUrl: './prod-blanches.component.html',
  styleUrls: ['./prod-blanches.component.css']
})
export class ProdBlanchesComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

    retourBieresMenu(): void {
    this.route.navigateByUrl('prod-bieres');
  }

}
