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
import { MessagerieComponent } from './messagerie/messagerie.component';
import { PanierComponent } from './panier/panier.component';
import { TestComponent } from './test/test.component';
import { AdminActivationComponent } from './admin-activation/admin-activation.component';
import { ImageGestionComponent } from './image-gestion/image-gestion.component';
import { NewProdGestionComponent } from './new-prod-gestion/new-prod-gestion.component';
import { NewProdUploaderComponent } from './new-prod-uploader/new-prod-uploader.component';
import { NavbarConsComponent } from './navbar-cons/navbar-cons.component';
import { NavbarProdComponent } from './navbar-prod/navbar-prod.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { EtalConsComponent } from './etal-cons/etal-cons.component';
import { ConsAutresComponent } from './cons-autres/cons-autres.component';
import { ConsBieresBlanchesComponent } from './cons-bieres-blanches/cons-bieres-blanches.component';
import { ConsBieresComponent } from './cons-bieres/cons-bieres.component';
import { ConsBieresBlondesComponent } from './cons-bieres-blondes/cons-bieres-blondes.component';
import { ConsBieresBrunesComponent } from './cons-bieres-brunes/cons-bieres-brunes.component';
import { ConsBieresRoussesComponent } from './cons-bieres-rousses/cons-bieres-rousses.component';
import { ConsFromagesComponent } from './cons-fromages/cons-fromages.component';
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
import { ConsFruitsComponent } from './cons-fruits/cons-fruits.component';

const routes: Routes = [
  { component: ConnexionComponent, path: 'login' },
  { component: InscriptionComponent, path: 'inscription'},
  { component: ImageUploaderComponent, path: 'uploader' },
  { component: ImageGestionComponent, path: 'image' },
  { component: NewProdGestionComponent, path: 'new-prod'},
  { component: NewProdUploaderComponent, path: 'new-prod-uploader'},
  
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
  {component: MessagerieComponent, path: 'messagerie'},
  {component: PanierComponent, path: 'panier'},
  {component: NavbarConsComponent, path: 'nav-cons'},
  {component: NavbarProdComponent, path: 'nav-prod'},
  {component: NavbarAdminComponent, path: 'nav-admin'},
  {component: EtalConsComponent, path: 'etal-cons'},
  {component: ConsAutresComponent, path: 'cons-autres'},
  {component: ConsBieresComponent, path: 'cons-bieres'},
  {component: ConsBieresBlanchesComponent, path: 'cons-blanches'},
  {component: ConsBieresBlondesComponent, path: 'cons-blondes'},
  {component: ConsBieresBrunesComponent, path: 'cons-brunes'},
  {component: ConsBieresRoussesComponent, path: 'cons-rousses'},
  {component: ConsFromagesComponent, path: 'cons-fromages'},
  {component: ConsFruitsAgrumesComponent, path: 'cons-agrumes'},
  {component: ConsFruitsBaiesComponent, path: 'cons-baies'},
  {component: ConsFruitsDrupesComponent, path: 'cons-drupes'},
  {component: ConsFruitsPepoComponent, path: 'cons-pepos'},
  {component: ConsFruitsPomesComponent, path: 'cons-pomes'},
  {component: ConsFruitsTropicauxComponent, path: 'cons-tropicaux'},
  {component: ConsLegumesComponent, path: 'cons-legumes'},
  {component: ConsLegumesAromatiquesComponent, path: 'cons-aromatiques'},
  {component: ConsLegumesChampignonsComponent, path: 'cons-champignons'},
  {component: ConsLegumesChouxComponent, path: 'cons-choux'},
  {component: ConsLegumesCourgesComponent, path: 'cons-courges'},
  {component: ConsLegumesRacinesComponent, path: 'cons-racines'},
  {component: ConsLegumesSaladesComponent, path: 'cons-salades'},
  {component: ConsLegumesSecComponent, path: 'cons-legumesSecs'},
  {component: ConsLegumesfeuillesComponent, path: 'legumesFeuilles'},
  {component: ConsLegumesfruitsComponent, path: 'cons-legumesFruits'},
  {component: ConsVinsComponent, path: 'cons-vins'},
  {component: ConsVinsBlancsComponent, path: 'cons-blancs'},
  {component: ConsVinsChampagnesComponent, path: 'cons-champagnes'},
  {component: ConsVinsRosesComponent, path: 'cons-roses'},
  {component: ConsVinsRougesComponent, path: 'cons-rouges'},
  {component: ConsFruitsComponent, path: 'cons-fruits'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
