import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccessService } from '../access.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-boite-reception',
  templateUrl: './boite-reception.component.html',
  styleUrls: ['./boite-reception.component.css']
})
export class BoiteReceptionComponent implements OnInit {

  Msg = '';
  liste: any;

  constructor(private http: HttpClient, private access: AccessService, private authService: AuthService) { }

  ngOnInit(): void {
    this.http.get(this.access.getBackURL() + 'messagerie/boiteReception/' + this.authService.getUserInLocalStorage().id).subscribe({
      next: (data) =>{
        this.liste = data;
        let n = this.liste.length;
        for (let i = 0; i < n; i++) {
          this.Msg += 'Emetteur: ' + this.liste[i].emetteur.prenom + ' ' + this.liste[i].emetteur.nom; 
          this.Msg += '\r\n' + 'Contenu: ' + this.liste[i].contenu + '\r\n' +'\r\n';
        }
        console.log(this.Msg);
      },
      error: (err) => { console.log(err) }
    })
  }

  deleteMessage(id: any): void{
    this.http.delete(this.access.getBackURL() + 'deleteMessage/' + id).subscribe({
      next: (data) =>{

      },
      error: (err) => { console.log (err) }
    })
  }

}
