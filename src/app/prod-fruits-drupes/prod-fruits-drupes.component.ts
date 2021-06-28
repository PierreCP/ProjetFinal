import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-fruits-drupes',
  templateUrl: './prod-fruits-drupes.component.html',
  styleUrls: ['./prod-fruits-drupes.component.css']
})
export class ProdFruitsDrupesComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  retourFruitsMenu(): void {
    this.route.navigateByUrl('prod-fruits');
  }

}
