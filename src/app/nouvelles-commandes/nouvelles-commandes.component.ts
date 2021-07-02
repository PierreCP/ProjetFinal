import { Component, OnInit } from '@angular/core';
import { AccessService } from '../access.service';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nouvelles-commandes',
  templateUrl: './nouvelles-commandes.component.html',
  styleUrls: ['./nouvelles-commandes.component.css']
})
export class NouvellesCommandesComponent implements OnInit {

  listCommandes: any;
  user: any;


  constructor(private http: HttpClient, private access: AccessService, public authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.getUserInLocalStorage();
    this.http.get(this.access.getBackURL() + 'commandes-nouvelles/' + this.user.id).subscribe({
      next: (data) => {
        this.listCommandes = data;
        console.log(this.listCommandes);
      },
      error: (err) => (console.log(err))
    });
  }


  validate(idCommandes: any): void{
    console.log(idCommandes);
    this.user = this.authService.getUserInLocalStorage();
    this.http.get(this.access.getBackURL() + 'valider-commande/' + idCommandes).subscribe({
      next: (data) => {
        this.ngOnInit();
      },
      error: (err) => (console.log(err))
    });
  }
}
