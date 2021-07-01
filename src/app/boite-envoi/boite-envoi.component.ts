import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccessService } from '../access.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-boite-envoi',
  templateUrl: './boite-envoi.component.html',
  styleUrls: ['./boite-envoi.component.css']
})
export class BoiteEnvoiComponent implements OnInit {

  Msg = '';
  liste: any;
  constructor(private http: HttpClient, private access: AccessService, public authService: AuthService) { }

  ngOnInit(): void {
    this.http.get(this.access.getBackURL() + 'messagerie/boiteEnvoi/' + this.authService.getUserInLocalStorage().id).subscribe({
      next: (data) =>{
        this.liste = data;
        let n = this.liste.length;
        for (let i = 0; i < n; i++) {
          this.Msg += 'Receveur: ' + this.liste[i].receveur.prenom + ' ' + this.liste[i].receveur.nom; 
          this.Msg += '\r\n' + 'Contenu: ' + this.liste[i].contenu + '\r\n' +'\r\n';
        }
        console.log(this.Msg);
      },
      error: (err) => { console.log(err) }
    })
  }

}
