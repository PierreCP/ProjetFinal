import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-fruits-pomes',
  templateUrl: './prod-fruits-pomes.component.html',
  styleUrls: ['./prod-fruits-pomes.component.css']
})
export class ProdFruitsPomesComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  retourFruitsMenu(): void {
    this.route.navigateByUrl('prod-fruits');
  }

}
