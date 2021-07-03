import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css']
})
export class DialogExampleComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  goNavCons(): void{
    this.route.navigateByUrl('nav-cons')
  }

}
