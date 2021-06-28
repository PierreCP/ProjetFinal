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
import { MurProducteurComponent } from './mur-producteur/mur-producteur.component';



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
    MurProducteurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
