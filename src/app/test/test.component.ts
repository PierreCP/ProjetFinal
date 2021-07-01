import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  Selection: any = "Bienvenu sur Court-Circuit";

  constructor() { }

  ngOnInit(): void {
  }

  Text(Message: any):any{
    this.Selection= Message;
  }
}
