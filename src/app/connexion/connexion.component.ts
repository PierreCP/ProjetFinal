import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AccessService } from '../access.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  user: any;
  MsgErr = '';

  constructor(private http: HttpClient, private route: Router, public authService: AuthService, private access: AccessService) { }

  ngOnInit(): void {
    if (this.authService.getUserInLocalStorage() != null){
      this.route.navigateByUrl('accueil');
    }
  }

  connexion(u: any): void {
    this.http.post(this.access.getBackURL() + 'login', u).subscribe({
      next: (data) => {
        this.user = data;
        if (this.user != null) {
          this.authService.setUserInLocalStorage(this.user);
          this.route.navigateByUrl('accueil');
        } else {
          this.MsgErr = 'Identifiant ou mot de passe incorrect !'
        }
      },
      error: (err) => { console.log(err) }
    })
  }

}
