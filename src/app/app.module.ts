import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuProducteurComponent } from './menu-producteur/menu-producteur.component';
import { NavComponent } from './nav/nav.component';
import { EtalComponent } from './etal/etal.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuProducteurComponent,
    NavComponent,
    EtalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
