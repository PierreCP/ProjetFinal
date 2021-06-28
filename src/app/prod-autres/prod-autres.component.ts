import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-autres',
  templateUrl: './prod-autres.component.html',
  styleUrls: ['./prod-autres.component.css']
})
export class ProdAutresComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  retourEtal(): void {
    this.route.navigateByUrl('etal');
  }

}
