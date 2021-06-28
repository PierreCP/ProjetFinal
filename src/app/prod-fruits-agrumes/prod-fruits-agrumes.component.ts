import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-fruits-agrumes',
  templateUrl: './prod-fruits-agrumes.component.html',
  styleUrls: ['./prod-fruits-agrumes.component.css']
})
export class ProdFruitsAgrumesComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  retourFruitsMenu(): void {
    this.route.navigateByUrl('prod-fruits');
  }

}
