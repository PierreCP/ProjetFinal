import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AccessService } from '../access.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  user: any;
  MsgErr: any;

  constructor(private http: HttpClient, private route: Router, public authService: AuthService, private access: AccessService) { }

  ngOnInit(): void {
  }

  connexion(u: any): void{
    this.http.post(this.access.getBackURL() + 'login', u).subscribe({
      next: (data)=> {this.user = data; if (this.user.id != null) { this.authService.setUserInLocalStorage(this.user) ; this.route.navigateByUrl('memoprive');} else{
        this.MsgErr = 'Indentifiant ou mot de passe incorrecte !'
      }},
      error: (err)=> {}
    })
  }

}
