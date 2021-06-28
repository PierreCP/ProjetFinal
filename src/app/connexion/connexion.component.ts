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

  person: any;
  MsgErr: any;

  constructor(private http: HttpClient, private route: Router, public authService: AuthService, private access: AccessService) { }

  ngOnInit(): void {
  }

  connexion(p: any): void {
    this.http.post(this.access.getBackURL() + 'login', p).subscribe({
      next: (data) => {
        this.person = data;
        if (data != null) {
          this.authService.setUserInLocalStorage(this.person); this.route.navigateByUrl('');
        } else {
          this.MsgErr = 'Indentifiant ou mot de passe incorrecte !'
        }
      },
      error: (err) => { }
    })
  }

}
