import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-blondes',
  templateUrl: './prod-blondes.component.html',
  styleUrls: ['./prod-blondes.component.css']
})
export class ProdBlondesComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

    retourBieresMenu(): void {
    this.route.navigateByUrl('prod-bieres');
    }
}
