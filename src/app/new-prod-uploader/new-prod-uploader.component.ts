import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AccessService } from '../access.service';
import { NgForm } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProducteurService } from '../producteur.service';

@Component({
  selector: 'app-new-prod-uploader',
  templateUrl: './new-prod-uploader.component.html',
  styleUrls: ['./new-prod-uploader.component.css']
})
export class NewProdUploaderComponent implements OnInit {

  produit: any;
  mediaUrl: any;
  id: any;

  constructor(private http: HttpClient, private route: Router, public authService: AuthService, private access: AccessService, private producteurService: ProducteurService, public dialogRef: MatDialogRef<NewProdUploaderComponent>) { }

  ngOnInit(): void {
  }

  uploadPdt(p: any): any {
    p.image = window.btoa(this.mediaUrl);
    this.http.get(this.access.getBackURL() + 'SousCategorie/' + p.sousCategorie.toString()).subscribe({
      next: (data) => {
        p.sousCategorie = data;
        this.http.post(this.access.getBackURL() + 'produit', p).subscribe({
          next: (res) => {
            this.id = res;
            this.http.get(this.access.getBackURL() + 'lier/' + this.producteurService.producteur.id.toString() + '/' + this.id.toString()).subscribe();
            this.dialogRef.close();
          },
          error: (err) => {
            console.log(err);
            this.dialogRef.close();
          }
        });
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
