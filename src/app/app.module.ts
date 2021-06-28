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
import { Test123Component } from './test123/test123.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MenuConsommateurComponent } from './menu-consommateur/menu-consommateur.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProdBlondesComponent } from './prod-bieres-blondes/prod-blondes.component';
import { ProdBrunesComponent } from './prod-bieres-brunes/prod-brunes.component';
import { ProdRoussesComponent } from './prod-bieres-rousses/prod-rousses.component';
import { ProdBlanchesComponent } from './prod-bieres-blanches/prod-blanches.component';
import { ProdRougesComponent } from './prod-vins-rouges/prod-rouges.component';
import { ProdBlancsComponent } from './prod-vins-blancs/prod-blancs.component';
import { ProdChampagnesComponent } from './prod-vins-champagnes/prod-champagnes.component';
import { ProdRacinesComponent } from './prod-legumes-racines/prod-racines.component';
import { ProdChouxComponent } from './prod-legumes-choux/prod-choux.component';
import { ProdCourgesComponent } from './prod-legumes-courges/prod-courges.component';
import { ProdChampignonsComponent } from './prod-legumes-champignons/prod-champignons.component';
import { ProdAromatiquesComponent } from './prod-legumes-aromatiques/prod-aromatiques.component';
import { ProdLegumesfruitsComponent } from './prod-legumesfruits/prod-legumesfruits.component';
import { ProdSaladesComponent } from './prod-legumes-salades/prod-salades.component';
import { ProdLegumesfeuillesComponent } from './prod-legumesfeuilles/prod-legumesfeuilles.component';
import { ProdLegumesSecComponent } from './prod-legumes-sec/prod-legumes-sec.component';
import { ProdRosesComponent } from './prod-vins-roses/prod-roses.component';
import { ProdFruitsDrupesComponent } from './prod-fruits-drupes/prod-fruits-drupes.component';
import { ProdFruitsBaiesComponent } from './prod-fruits-baies/prod-fruits-baies.component';
import { ProdFruitsPomesComponent } from './prod-fruits-pomes/prod-fruits-pomes.component';
import { ProdFruitsAgrumesComponent } from './prod-fruits-agrumes/prod-fruits-agrumes.component';
import { ProdFruitsPepoComponent } from './prod-fruits-pepo/prod-fruits-pepo.component';
import { ProdFruitsTropicauxComponent } from './prod-fruits-tropicaux/prod-fruits-tropicaux.component';




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
    MurProducteurComponent,
    Test123Component,
    MenuConsommateurComponent,
    AccueilComponent,
    ProdBlondesComponent,
    ProdBrunesComponent,
    ProdRoussesComponent,
    ProdBlanchesComponent,
    ProdRougesComponent,
    ProdBlancsComponent,
    ProdRosesComponent,
    ProdChampagnesComponent,
    ProdRacinesComponent,
    ProdChouxComponent,
    ProdCourgesComponent,
    ProdChampignonsComponent,
    ProdAromatiquesComponent,
    ProdLegumesfruitsComponent,
    ProdSaladesComponent,
    ProdLegumesfeuillesComponent,
    ProdLegumesSecComponent,
    ProdFruitsDrupesComponent,
    ProdFruitsBaiesComponent,
    ProdFruitsPomesComponent,
    ProdFruitsAgrumesComponent,
    ProdFruitsPepoComponent,
    ProdFruitsTropicauxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    HttpClientModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
