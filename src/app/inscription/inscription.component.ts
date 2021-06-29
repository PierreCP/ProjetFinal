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

  constructor(private http: HttpClient, private route: Router, public authService: AuthService, private access: AccessService) { }

  ngOnInit(): void {
  }

  inscription(u: any): void {
    console.log(u);
    this.http.post(this.access.getBackURL() + '/person', u).subscribe({
      next: (data) => {
        this.route.navigateByUrl('login')
        
      },
      error: (err) => { console.log(err) }
    });
  }

}
