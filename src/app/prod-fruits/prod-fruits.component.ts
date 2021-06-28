import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-fruits',
  templateUrl: './prod-fruits.component.html',
  styleUrls: ['./prod-fruits.component.css']
})
export class ProdFruitsComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  retourEtal(): void {
    this.route.navigateByUrl('etal');
  }
}
