import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { EtalComponent } from './etal/etal.component';
import { MenuProducteurComponent } from './menu-producteur/menu-producteur.component';
import { MurProducteurComponent } from './mur-producteur/mur-producteur.component';
import { ProdAutresComponent } from './prod-autres/prod-autres.component';
import { ProdBieresComponent } from './prod-bieres/prod-bieres.component';
import { ProdFromagesComponent } from './prod-fromages/prod-fromages.component';
import { ProdFruitsComponent } from './prod-fruits/prod-fruits.component';
import { ProdLegumesComponent } from './prod-legumes/prod-legumes.component';
import { ProdVinsComponent } from './prod-vins/prod-vins.component';
import { Test123Component } from './test123/test123.component';
import { MenuConsommateurComponent } from './menu-consommateur/menu-consommateur.component';
import { ListeProducteurComponent } from './liste-producteur/liste-producteur.component';
import { ProdBlanchesComponent } from './prod-bieres-blanches/prod-blanches.component';
import { ProdBrunesComponent } from './prod-bieres-brunes/prod-brunes.component';
import { ProdRoussesComponent } from './prod-bieres-rousses/prod-rousses.component';
import { ProdBlondesComponent } from './prod-bieres-blondes/prod-blondes.component';
import { ProdRougesComponent } from './prod-vins-rouges/prod-rouges.component';
import { ProdBlancsComponent } from './prod-vins-blancs/prod-blancs.component';
import { ProdRosesComponent } from './prod-vins-roses/prod-roses.component';
import { ProdChampagnesComponent } from './prod-vins-champagnes/prod-champagnes.component';
import { ProdRacinesComponent } from './prod-legumes-racines/prod-racines.component';
import { ProdChouxComponent } from './prod-legumes-choux/prod-choux.component';
import { ProdCourgesComponent } from './prod-legumes-courges/prod-courges.component';
import { ProdChampignonsComponent } from './prod-legumes-champignons/prod-champignons.component';
import { ProdAromatiquesComponent } from './prod-legumes-aromatiques/prod-aromatiques.component';
import { ProdLegumesfruitsComponent } from './prod-legumesfruits/prod-legumesfruits.component';
import { ProdLegumesfeuillesComponent } from './prod-legumesfeuilles/prod-legumesfeuilles.component';
import { ProdLegumesSecComponent } from './prod-legumes-sec/prod-legumes-sec.component';
import { ProdSaladesComponent } from './prod-legumes-salades/prod-salades.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ProdFruitsDrupesComponent } from './prod-fruits-drupes/prod-fruits-drupes.component';
import { ProdFruitsBaiesComponent } from './prod-fruits-baies/prod-fruits-baies.component';
import { ProdFruitsPomesComponent } from './prod-fruits-pomes/prod-fruits-pomes.component';
import { ProdFruitsAgrumesComponent } from './prod-fruits-agrumes/prod-fruits-agrumes.component';
import { ProdFruitsPepoComponent } from './prod-fruits-pepo/prod-fruits-pepo.component';
import { ProdFruitsTropicauxComponent } from './prod-fruits-tropicaux/prod-fruits-tropicaux.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { PanierComponent } from './panier/panier.component';

import { TestComponent } from './test/test.component';
import { AdminActivationComponent } from './admin-activation/admin-activation.component';
import { ImageGestionComponent } from './image-gestion/image-gestion.component';

const routes: Routes = [
  { component: ConnexionComponent, path: 'login' },
  { component: InscriptionComponent, path: 'inscription'},
  { component: ImageUploaderComponent, path: 'uploader' },
  { component: ImageGestionComponent, path: 'image' },
  
  { component: MenuAdminComponent, path: 'menu-admin'},
  { component: AdminActivationComponent, path: 'admin-activation'},

  { component: MenuProducteurComponent, path: 'menu-prod' },
  { component: EtalComponent, path: 'etal', children: [
    { component: ProdVinsComponent, path: 'prod-vins' },
    { component: ProdAutresComponent, path: 'prod-autres' },
    { component: ProdFruitsComponent, path: 'prod-fruits' },
    { component: ProdLegumesComponent, path: 'prod-legumes' },
    { component: ProdBieresComponent, path: 'prod-bieres' },
    { component: ProdFromagesComponent, path: 'prod-fromages'},
    { component: Test123Component, path: 'pagetest123'},
  ]},

  {component: AccueilComponent, path: 'accueil'},
  {component: MenuConsommateurComponent, path: 'menu-cons'},
  { component: EtalComponent, path: 'etal' },
  { component: ProdVinsComponent, path: 'prod-vins' },
  { component: ProdAutresComponent, path: 'prod-autres' },
  { component: ProdLegumesComponent, path: 'prod-legumes' },
  { component: ProdBieresComponent, path: 'prod-bieres' },
  { component: ProdFromagesComponent, path: 'prod-fromages' },
  { component: Test123Component, path: 'test123' },
  {component: TestComponent, path: 'test'},
  { component: AccueilComponent, path: 'accueil' },
  { component: MenuConsommateurComponent, path: 'menu-cons' },
  { component: MenuAdminComponent, path: 'menu-admin' },
  { component: ProdFruitsComponent, path: 'prod-fruits' },
  {component: MurProducteurComponent, path: 'mur'},
  {component: ListeProducteurComponent, path: 'liste-prod'},
  {component: ProdBlanchesComponent, path: 'prod-blanches'},
  {component: ProdBrunesComponent, path: 'prod-brunes'},
  {component: ProdRoussesComponent, path: 'prod-rousses'},
  {component: ProdBlondesComponent, path: 'prod-blondes'},
  {component: ProdRougesComponent, path: 'prod-rouges'},
  {component: ProdBlancsComponent, path: 'prod-blancs'},
  {component: ProdRosesComponent, path: 'prod-roses'},
  {component: ProdChampagnesComponent, path: 'prod-champagnes'},
  {component: ProdRacinesComponent, path: 'prod-racines'},
  {component: ProdChouxComponent, path: 'prod-choux'},
  {component: ProdCourgesComponent, path: 'prod-courges'},
  {component: ProdChampignonsComponent, path: 'prod-champignons'},
  {component: ProdAromatiquesComponent, path: 'prod-aromatiques'},
  {component: ProdLegumesfruitsComponent, path: 'prod-legumesFruits'},
  {component: ProdSaladesComponent, path: 'prod-salades'},
  {component: ProdLegumesfeuillesComponent, path: 'prod-legumesFeuilles'},
  {component: ProdFruitsDrupesComponent, path: 'prod-drupes'},
  {component: ProdFruitsBaiesComponent, path: 'prod-baies'},
  {component: ProdFruitsPomesComponent, path: 'prod-pomes'},
  {component: ProdFruitsAgrumesComponent, path: 'prod-agrumes'},
  {component: ProdFruitsPepoComponent, path: 'prod-pepos'},
  {component: ProdFruitsTropicauxComponent, path: 'prod-tropicaux'},
  {component: ProdLegumesSecComponent, path: 'prod-legumesSecs'},
  {component: PanierComponent, path: 'panier'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
