import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-fruits-pepo',
  templateUrl: './prod-fruits-pepo.component.html',
  styleUrls: ['./prod-fruits-pepo.component.css']
})
export class ProdFruitsPepoComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  retourFruitsMenu(): void {
    this.route.navigateByUrl('prod-fruits');
  }

}
