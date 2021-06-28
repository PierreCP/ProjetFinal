import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-fruits-baies',
  templateUrl: './prod-fruits-baies.component.html',
  styleUrls: ['./prod-fruits-baies.component.css']
})
export class ProdFruitsBaiesComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  retourFruitsMenu(): void {
    this.route.navigateByUrl('prod-fruits');
  }

}
