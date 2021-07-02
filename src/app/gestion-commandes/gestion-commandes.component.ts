import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccessService } from '../access.service';
import { AuthService } from '../auth.service';
import { MatDialog } from '@angular/material/dialog';
import { HistoriqueCommandeComponent } from "../historique-commande/historique-commande.component";
import { NouvellesCommandesComponent } from "../nouvelles-commandes/nouvelles-commandes.component";

@Component({
  selector: 'app-gestion-commandes',
  templateUrl: './gestion-commandes.component.html',
  styleUrls: ['./gestion-commandes.component.css']
})
export class GestionCommandesComponent implements OnInit {

  listCommandes: any;
  user: any;
  Selection: any;

  constructor(private http: HttpClient, private access: AccessService, public authService: AuthService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.user = this.authService.getUserInLocalStorage();
    this.http.get(this.access.getBackURL() + 'commandes/' + this.user.id).subscribe({
      next: (data) => {
        this.listCommandes = data;
        console.log(this.listCommandes);
      },
      error: (err) => (console.log(err))
    });
  }

  Text(Message: any):any{
    this.Selection= Message;
  }

  historique(): any{
    const reception = this.dialog.open(HistoriqueCommandeComponent)
  }

  nouvellesCommandes(): any{
    const envoi = this.dialog.open(NouvellesCommandesComponent)
  }

}
