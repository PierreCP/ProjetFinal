import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AccessService } from '../access.service';
import { AuthService } from '../auth.service';
import { BoiteEnvoiComponent } from '../boite-envoi/boite-envoi.component';
import { BoiteReceptionComponent } from '../boite-reception/boite-reception.component';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent implements OnInit {

  constructor(private http: HttpClient, private route: Router, public authService: AuthService, private access: AccessService, private dialog: MatDialog) { }

  user: any;
  Selection: any;

  ngOnInit(): void {
    if (!this.authService.isProd(this.authService.getUserInLocalStorage().id)) {
      this.route.navigateByUrl('accueil');
    }
  }

  boiteReception(): any{
    const reception = this.dialog.open(BoiteReceptionComponent)
  }

  boiteEnvoi(): any{
    const envoi = this.dialog.open(BoiteEnvoiComponent)
  }
  
  Text(Message: any):any{
    this.Selection= Message;
  }
  
}
