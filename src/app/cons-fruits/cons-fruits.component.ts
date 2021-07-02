import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cons-fruits',
  templateUrl: './cons-fruits.component.html',
  styleUrls: ['./cons-fruits.component.css']
})
export class ConsFruitsComponent implements OnInit {

  constructor(private route: Router) { }
  user: any;
  liste: any;
  ngOnInit(): void {
  }
  retourEtal(): void {
    this.route.navigateByUrl('etal-cons');

  }

}
