import { Component, OnInit } from '@angular/core';
import { AccessService } from '../access.service';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commandes-perso',
  templateUrl: './commandes-perso.component.html',
  styleUrls: ['./commandes-perso.component.css']
})
export class CommandesPersoComponent implements OnInit {

  listCommandes: any;
  user: any;

  constructor(private http: HttpClient,private route: Router, private access: AccessService, public authService: AuthService) { }

  ngOnInit(): void {
    if (!this.authService.isCons(this.authService.getUserInLocalStorage().id)) {
      this.route.navigateByUrl('accueil');
    }
    this.user = this.authService.getUserInLocalStorage();
    this.http.get(this.access.getBackURL() + 'commandes-perso/' + this.user.id).subscribe({
      next: (data) => {
        this.listCommandes = data;
        console.log(this.listCommandes);
      },
      error: (err) => (console.log(err))
    });
  }


  changeFormatMedia(media: any): any {
    return window.atob(media);
  }

  mediaExist(media: any): boolean {
    if (media != null) {
      return true;
    }
    else {
      return false;
    }
  }
}
