import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AccessService } from '../access.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-image-printer',
  templateUrl: './image-printer.component.html',
  styleUrls: ['./image-printer.component.css']
})
export class ImagePrinterComponent implements OnInit {

  objetimage: any;

  constructor(private http: HttpClient, private route: Router, public authService: AuthService, private access: AccessService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getImg(70);
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
