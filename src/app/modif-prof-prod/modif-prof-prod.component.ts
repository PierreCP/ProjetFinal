import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AccessService } from '../access.service';
import { AuthService } from '../auth.service';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';

@Component({
  selector: 'app-modif-prof-prod',
  templateUrl: './modif-prof-prod.component.html',
  styleUrls: ['./modif-prof-prod.component.css']
})
export class ModifProfProdComponent implements OnInit {

  user: any;
  type ='type';
  constructor(public authService: AuthService, private route: Router, private http: HttpClient, private access: AccessService, public dialog: MatDialog) { }

  ngOnInit(): void {
    if (!this.authService.isProd(this.authService.getUserInLocalStorage().id)) {
      this.route.navigateByUrl('accueil');
    }
    this.user = this.authService.getProdInLocalStorage();
  }

  modifier(u: any): void {
    let address = {numeroRue: u.numeroRue, nomRue: u.nomRue, nomCommune: u.nomCommune, codePostal: u.codePostal};
    let personne = {login: u.login, mdp: u.mdp, nom: u.nom, prenom: u.prenom, age: u.age, adresse: address};
    let prod = {nomMagasin: u.nomMagasin, person: personne}
    this.http.put(this.access.getBackURL() + 'prod/' + this.authService.getProdInLocalStorage().id, prod).subscribe({
      next: (data)=> {
        this.user=data,
        this.authService.setUserInLocalStorage(this.user.person),
        this.authService.setProdInLocalStorage(this.user)
        this.dialog.open(DialogExampleComponent);
      },
      error: (err)=> (console.log(err))
    })
  }

}
