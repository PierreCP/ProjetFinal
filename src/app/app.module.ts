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
import { ProdFruitsComponent } from './prod-fruits/prod-fruits.component';
import { ProdLegumesComponent } from './prod-legumes/prod-legumes.component';
import { ProdVinsComponent } from './prod-vins/prod-vins.component';
import { ProdBieresComponent } from './prod-bieres/prod-bieres.component';
import { ProdAutresComponent } from './prod-autres/prod-autres.component';
import { ProdFromagesComponent } from './prod-fromages/prod-fromages.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { Test123Component } from './test123/test123.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import { MenuConsommateurComponent } from './menu-consommateur/menu-consommateur.component';
import { AccueilComponent } from './accueil/accueil.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuProducteurComponent,
    NavComponent,
    EtalComponent,
    ProdFruitsComponent,
    ProdLegumesComponent,
    ProdVinsComponent,
    ProdBieresComponent,
    ProdAutresComponent,
    ProdFromagesComponent,
    ConnexionComponent,
    Test123Component,

    MenuConsommateurComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    HttpClientModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
