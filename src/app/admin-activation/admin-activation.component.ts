import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccessService } from '../access.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-activation',
  templateUrl: './admin-activation.component.html',
  styleUrls: ['./admin-activation.component.css']
})
export class AdminActivationComponent implements OnInit {

  constructor(public http: HttpClient, public access: AccessService) { }

  ngOnInit(): void {
  }

  listeComptes(): void {
    this.http.get(this.access.getBackURL()+'person').subscribe({
      next: (data) => {console.log(data);},
      error: (err) => {console.log(err);}
    });
  }

}
