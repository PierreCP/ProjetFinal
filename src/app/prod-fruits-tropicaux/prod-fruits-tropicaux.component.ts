import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-fruits-tropicaux',
  templateUrl: './prod-fruits-tropicaux.component.html',
  styleUrls: ['./prod-fruits-tropicaux.component.css']
})
export class ProdFruitsTropicauxComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  retourFruitsMenu(): void {
    this.route.navigateByUrl('prod-fruits');
  }
}
