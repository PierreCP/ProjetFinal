import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AccessService } from '../access.service';
import { AuthService } from '../auth.service';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';

@Component({
  selector: 'app-modif-prof-cons',
  templateUrl: './modif-prof-cons.component.html',
  styleUrls: ['./modif-prof-cons.component.css']
})
export class ModifProfConsComponent implements OnInit {

  
  user: any;
  type ='type';
  constructor(public authService: AuthService, private route: Router, private http: HttpClient, private access: AccessService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.user = this.authService.getUserInLocalStorage();
  }

  modifier(u: any): void {
    let address = {numeroRue: u.numeroRue, nomRue: u.nomRue, nomCommune: u.nomCommune, codePostal: u.codePostal};
    let personne = {login: u.login, mdp: u.mdp, nom: u.nom, prenom: u.prenom, age: u.age, adresse: address};
    this.http.put(this.access.getBackURL() + 'person/' + this.authService.getUserInLocalStorage().id, personne).subscribe({
      next: (data)=> {
        this.user=data,
        this.authService.setUserInLocalStorage(this.user),
        this.dialog.open(DialogExampleComponent);
      },
      error: (err)=> (console.log(err))
    })
  }


}
