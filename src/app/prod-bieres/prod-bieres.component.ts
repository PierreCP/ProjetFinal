import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-prod-bieres',
  templateUrl: './prod-bieres.component.html',
  styleUrls: ['./prod-bieres.component.css']
})
export class ProdBieresComponent implements OnInit {

  constructor(private route: Router, public authService: AuthService) { }

  ngOnInit(): void {
  }

  retourEtal(): void {
    this.route.navigateByUrl('etal');
  }
  redirectionBlondesMenu(): void {
    this.route.navigateByUrl('prod-blondes');
  }
  redirectionBrunesMenu(): void {
    this.route.navigateByUrl('prod-brunes');
  }
  redirectionRoussesMenu(): void {
    this.route.navigateByUrl('prod-rousses');
  }
  redirectionBlanchesMenu(): void {
    this.route.navigateByUrl('prod-blanches');
  }
}
