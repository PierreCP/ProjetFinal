import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-rousses',
  templateUrl: './prod-rousses.component.html',
  styleUrls: ['./prod-rousses.component.css']
})
export class ProdRoussesComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  
    retourBieresMenu(): void {
    this.route.navigateByUrl('prod-bieres');}

}
