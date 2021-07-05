import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MenuConsommateurComponent } from './menu-consommateur/menu-consommateur.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeProducteurComponent } from './liste-producteur/liste-producteur.component';
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
import { InscriptionComponent } from './inscription/inscription.component';
import { ProdFruitsDrupesComponent } from './prod-fruits-drupes/prod-fruits-drupes.component';
import { ProdFruitsBaiesComponent } from './prod-fruits-baies/prod-fruits-baies.component';
import { ProdFruitsPomesComponent } from './prod-fruits-pomes/prod-fruits-pomes.component';
import { ProdFruitsAgrumesComponent } from './prod-fruits-agrumes/prod-fruits-agrumes.component';
import { ProdFruitsPepoComponent } from './prod-fruits-pepo/prod-fruits-pepo.component';
import { ProdFruitsTropicauxComponent } from './prod-fruits-tropicaux/prod-fruits-tropicaux.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { NouveauMessageComponent } from './nouveau-message/nouveau-message.component';
import { BoiteReceptionComponent } from './boite-reception/boite-reception.component';
import { BoiteEnvoiComponent } from './boite-envoi/boite-envoi.component';
import { PanierComponent } from './panier/panier.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { TestComponent } from './test/test.component';
import { AdminActivationComponent } from './admin-activation/admin-activation.component';
import { ImageGestionComponent } from './image-gestion/image-gestion.component';
import { NewProdGestionComponent } from './new-prod-gestion/new-prod-gestion.component';
import { NewProdUploaderComponent } from './new-prod-uploader/new-prod-uploader.component';
import { NavbarConsComponent } from './navbar-cons/navbar-cons.component';
import { NavbarProdComponent } from './navbar-prod/navbar-prod.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { EtalConsComponent } from './etal-cons/etal-cons.component';
import { ConsAutresComponent } from './cons-autres/cons-autres.component';
import { ConsBieresComponent } from './cons-bieres/cons-bieres.component';
import { ConsBieresBlanchesComponent } from './cons-bieres-blanches/cons-bieres-blanches.component';
import { ConsBieresBlondesComponent } from './cons-bieres-blondes/cons-bieres-blondes.component';
import { ConsBieresBrunesComponent } from './cons-bieres-brunes/cons-bieres-brunes.component';
import { ConsBieresRoussesComponent } from './cons-bieres-rousses/cons-bieres-rousses.component';
import { ConsFromagesComponent } from './cons-fromages/cons-fromages.component';
import { ConsFruitsComponent } from './cons-fruits/cons-fruits.component';
import { ConsFruitsAgrumesComponent } from './cons-fruits-agrumes/cons-fruits-agrumes.component';
import { ConsFruitsBaiesComponent } from './cons-fruits-baies/cons-fruits-baies.component';
import { ConsFruitsDrupesComponent } from './cons-fruits-drupes/cons-fruits-drupes.component';
import { ConsFruitsPepoComponent } from './cons-fruits-pepo/cons-fruits-pepo.component';
import { ConsFruitsPomesComponent } from './cons-fruits-pomes/cons-fruits-pomes.component';
import { ConsFruitsTropicauxComponent } from './cons-fruits-tropicaux/cons-fruits-tropicaux.component';
import { ConsLegumesComponent } from './cons-legumes/cons-legumes.component';
import { ConsLegumesAromatiquesComponent } from './cons-legumes-aromatiques/cons-legumes-aromatiques.component';
import { ConsLegumesChampignonsComponent } from './cons-legumes-champignons/cons-legumes-champignons.component';
import { ConsLegumesChouxComponent } from './cons-legumes-choux/cons-legumes-choux.component';
import { ConsLegumesCourgesComponent } from './cons-legumes-courges/cons-legumes-courges.component';
import { ConsLegumesRacinesComponent } from './cons-legumes-racines/cons-legumes-racines.component';
import { ConsLegumesSaladesComponent } from './cons-legumes-salades/cons-legumes-salades.component';
import { ConsLegumesSecComponent } from './cons-legumes-sec/cons-legumes-sec.component';
import { ConsLegumesfeuillesComponent } from './cons-legumesfeuilles/cons-legumesfeuilles.component';
import { ConsLegumesfruitsComponent } from './cons-legumesfruits/cons-legumesfruits.component';
import { ConsVinsComponent } from './cons-vins/cons-vins.component';
import { ConsVinsBlancsComponent } from './cons-vins-blancs/cons-vins-blancs.component';
import { ConsVinsChampagnesComponent } from './cons-vins-champagnes/cons-vins-champagnes.component';
import { ConsVinsRosesComponent } from './cons-vins-roses/cons-vins-roses.component';
import { ConsVinsRougesComponent } from './cons-vins-rouges/cons-vins-rouges.component';
import { ProduitDuMoisComponent } from './produit-du-mois/produit-du-mois.component';
import { GestionCommandesComponent } from './gestion-commandes/gestion-commandes.component';
import { HistoriqueCommandeComponent } from './historique-commande/historique-commande.component';
import { NouvellesCommandesComponent } from './nouvelles-commandes/nouvelles-commandes.component';
import { ModifProfConsComponent } from './modif-prof-cons/modif-prof-cons.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { MessagerieConsComponent } from './messagerie-cons/messagerie-cons.component';
import { ImageChangerComponent } from './image-changer/image-changer.component';
import { ModifProfProdComponent } from './modif-prof-prod/modif-prof-prod.component';
import { DialogModifConsComponent } from './dialog-modif-cons/dialog-modif-cons.component';
import { CommandesPersoComponent } from './commandes-perso/commandes-perso.component';
import { RouterModule } from '@angular/router';





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
    ListeProducteurComponent,
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
    InscriptionComponent,
    ProdLegumesSecComponent,
    ProdFruitsDrupesComponent,
    ProdFruitsBaiesComponent,
    ProdFruitsPomesComponent,
    ProdFruitsAgrumesComponent,
    ProdFruitsPepoComponent,
    ProdFruitsTropicauxComponent,
    MenuAdminComponent,
    ImageUploaderComponent,
    MessagerieComponent,
    NouveauMessageComponent,
    BoiteReceptionComponent,
    BoiteEnvoiComponent,
    PanierComponent,
    AjoutProduitComponent,
    TestComponent,
    ImageGestionComponent,
    NavbarConsComponent,
    NavbarProdComponent,
    NavbarAdminComponent,
    EtalConsComponent,
    ConsAutresComponent,
    ConsBieresComponent,
    ConsBieresBlanchesComponent,
    ConsBieresBlondesComponent,
    ConsBieresBrunesComponent,
    ConsBieresRoussesComponent,
    ConsFromagesComponent,
    ConsFruitsComponent,
    ConsFruitsAgrumesComponent,
    ConsFruitsBaiesComponent,
    ConsFruitsDrupesComponent,
    ConsFruitsPepoComponent,
    ConsFruitsPomesComponent,
    ConsFruitsTropicauxComponent,
    ConsLegumesComponent,
    ConsLegumesAromatiquesComponent,
    ConsLegumesChampignonsComponent,
    ConsLegumesChouxComponent,
    ConsLegumesCourgesComponent,
    ConsLegumesRacinesComponent,
    ConsLegumesSaladesComponent,
    ConsLegumesSecComponent,
    ConsLegumesfeuillesComponent,
    ConsLegumesfruitsComponent,
    ConsVinsComponent,
    ConsVinsBlancsComponent,
    ConsVinsChampagnesComponent,
    ConsVinsRosesComponent,
    ConsVinsRougesComponent,
    NewProdGestionComponent,
    NewProdUploaderComponent,
    AdminActivationComponent,
    ProduitDuMoisComponent,
    GestionCommandesComponent,
    HistoriqueCommandeComponent,
    NouvellesCommandesComponent,
    ModifProfConsComponent,
    DialogExampleComponent,
    MessagerieConsComponent,
    ImageChangerComponent,
    ModifProfProdComponent,
    DialogModifConsComponent,
    CommandesPersoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'',redirectTo: '/accueil', pathMatch:'full'},
    ]),
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
    MatDialogModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
  ],
  entryComponents: [
    NouveauMessageComponent,
    BoiteEnvoiComponent,
    BoiteReceptionComponent,
    DialogExampleComponent,
    NewProdUploaderComponent,
    DialogModifConsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
