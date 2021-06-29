import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AccessService } from '../access.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent implements OnInit {


  mediaUrl: any;

  constructor(private http: HttpClient, private route: Router, public authService: AuthService, private access: AccessService) { }

  ngOnInit(): void {
  }

  uploadImg(u: any):any {
    u.img = window.btoa(this.mediaUrl);
    this.http.post(this.access.getBackURL()+'upload', u).subscribe({
      next: (data) => {console.log(data);},
      error: (err) => {console.log(err);}
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
