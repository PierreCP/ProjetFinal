import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessService } from '../access.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  MsgErr = '';
  type ='type';

  constructor(private http: HttpClient, private route: Router, public authService: AuthService, private access: AccessService) { }

  ngOnInit(): void {
  }

  changeType (event: any) {
    this.type = event.value;
  }

  inscription(u: any): void {

    let address = {numeroRue: u.numeroRue, nomRue: u.nomRue, nomCommune: u.nomCommune, codePostal: u.codePostal};
    let personne = {login: u.login, mdp: u.mdp, nom: u.nom, prenom: u.prenom, age: u.age, adresse: address};
    
    let inscrit = {nomMagasin: u.nomMagasin, person: personne};

    
    this.http.post(this.access.getBackURL() + this.type + '/', inscrit).subscribe({
      next: (data) => {
        this.route.navigateByUrl('login')
      },
      error: (err) => { console.log(err) }
    });
  }

}
