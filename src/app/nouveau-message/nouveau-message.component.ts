import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessService } from '../access.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nouveau-message',
  templateUrl: './nouveau-message.component.html',
  styleUrls: ['./nouveau-message.component.css']
})
export class NouveauMessageComponent implements OnInit {

  test: any;
  MsgErr = '';
  longueur = 0;
  Titre = '';
  destinataire = ''; 

  constructor(private http: HttpClient, private route: Router, public authService: AuthService, private access: AccessService) { }

  ngOnInit(): void {
    this.destinataire += this.authService.getRecInLocalStorage().prenom + ' ' + this.authService.getRecInLocalStorage().nom
  }

  envoyer(u: any): void {

    let emetteur = {id: this.authService.getUserInLocalStorage().id};
    let receveur = {id: this.authService.getRecInLocalStorage().id};
    
    let message = {contenu: u.contenu, emetteur, receveur};
    
    this.http.post(this.access.getBackURL() + 'newMessage', message).subscribe({
      next: (data) => {
        this.test = data;
        if (this.test != null) {
          this.MsgErr = "Message Envoyé"
        }
        else {
          this.MsgErr = "Cet id de destinataire n'est pas attribué"
        }
      },
      error: (err) => { console.log(err) }
    })
  }
  
  valueChange(u: any) {
    this.longueur = u.contenu.length;
   }

}
