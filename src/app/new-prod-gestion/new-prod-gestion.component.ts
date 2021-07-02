import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AccessService } from '../access.service';
import { AuthService } from '../auth.service';
import { MurProducteurComponent } from '../mur-producteur/mur-producteur.component';
import { NewProdUploaderComponent } from '../new-prod-uploader/new-prod-uploader.component';

@Component({
  selector: 'app-new-prod-gestion',
  templateUrl: './new-prod-gestion.component.html',
  styleUrls: ['./new-prod-gestion.component.css']
})
export class NewProdGestionComponent implements OnInit {

  produits: any;
  objetimage: any;

  constructor(private http: HttpClient, private route:Router, private dialog: MatDialog, private access: AccessService, public authService: AuthService,) { }

  ngOnInit(): void {
    
  }

  addPdt(): any {
    const myDialog = this.dialog.open(NewProdUploaderComponent);
    myDialog.afterClosed().subscribe(result => {
      
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

  getImg(i: any): any {
    this.http.get(this.access.getBackURL() + 'image/' + i).subscribe({
      next: (data) => {
        this.objetimage = data;
        console.log(this.objetimage);
      },
      error: (err) => { console.log(err) }
    });
  }

  doStuff(): void {
    this.route.navigateByUrl('menu-prod')
  }

}
