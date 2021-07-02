import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cons-legumes',
  templateUrl: './cons-legumes.component.html',
  styleUrls: ['./cons-legumes.component.css']
})
export class ConsLegumesComponent implements OnInit {

  constructor(private route: Router) { }
  user: any;
  liste: any;
  ngOnInit(): void {
  }
  retourEtal(): void {
    this.route.navigateByUrl('etal-cons');

  }
}
