import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-modify-produit',
  templateUrl: './modify-produit.component.html',
  styleUrls: ['./modify-produit.component.css']
})
export class ModifyProduitComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
