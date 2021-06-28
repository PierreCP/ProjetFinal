import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-brunes',
  templateUrl: './prod-brunes.component.html',
  styleUrls: ['./prod-brunes.component.css']
})
export class ProdBrunesComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

    retourBieresMenu(): void {
    this.route.navigateByUrl('prod-bieres');

}
}
