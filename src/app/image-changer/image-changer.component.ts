import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AccessService } from '../access.service';
import { AuthService } from '../auth.service';
import { ProducteurService } from '../producteur.service';

@Component({
  selector: 'app-image-changer',
  templateUrl: './image-changer.component.html',
  styleUrls: ['./image-changer.component.css']
})
export class ImageChangerComponent implements OnInit {

  constructor(private http: HttpClient, private route: Router, public authService: AuthService, private access: AccessService, private producteurService: ProducteurService, public dialogRef: MatDialogRef<ImageChangerComponent>) { }

  produit: any;
  mediaUrl: any;
  id: any;
  listeSousCategorie: any;
  sousCat: any;

  ngOnInit(): void {
  }

  uploadImage(blob: any): any {
    blob = window.btoa(this.mediaUrl);
    this.produit = this.authService.getProduitForBlobInLocalStorage();
    this.produit.image = blob;
    this.http.post(this.access.getBackURL() + 'produit', this.produit).subscribe({
      next: (data) => {
        this.dialogRef.close();
        location.reload();
      }
    });

  }

  onFileChanged(event: any): any {
    const reader = new FileReader;
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.mediaUrl = reader.result;
    };
  }

}
