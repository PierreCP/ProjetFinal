import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-test123',
  templateUrl: './test123.component.html',
  styleUrls: ['./test123.component.css']
})
export class Test123Component implements OnInit {

  events: string[] = [];
  opened: boolean = true;

 // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));


  constructor() { }

  ngOnInit(): void {
  }

  toggleSidenav(): void{
    this.opened = !this.opened
  }


}
