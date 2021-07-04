import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-modif-cons',
  templateUrl: './dialog-modif-cons.component.html',
  styleUrls: ['./dialog-modif-cons.component.css']
})
export class DialogModifConsComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  goNavCons(): void{
    this.route.navigateByUrl('menu-cons')
  }


}
