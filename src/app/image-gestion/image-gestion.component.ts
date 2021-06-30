import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AccessService } from '../access.service';
import { ImageUploaderComponent } from '../image-uploader/image-uploader.component';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-image-gestion',
  templateUrl: './image-gestion.component.html',
  styleUrls: ['./image-gestion.component.css']
})
export class ImageGestionComponent implements OnInit {

  images: any;
  objetimage: any;

  constructor(private http: HttpClient, private route:Router, private dialog: MatDialog, private access: AccessService, public authService: AuthService) { }

  ngOnInit(): void {
    // l'api qui get toutes les images (à modifier plus tard par une api ne prenant que les images de la page en question par id)
    this.http.get(this.access.getBackURL()+ 'image').subscribe({
      next: (data) => {this.images = data},
      error: (err) => {console.log(err);}
    });
  }

  addImg(): any {
    const myDialog = this.dialog.open(ImageUploaderComponent);
    myDialog.afterClosed().subscribe(result => {
      this.ngOnInit();
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
